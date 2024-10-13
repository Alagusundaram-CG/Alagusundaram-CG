const express = require('express');
const last_deploy = new Date();
const cors = require('cors');
const path = require('path');
const api_router = require('../api/api_router');
const CONFIG = require('../common/inc.config');
const { MongoClient } = require('mongodb');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { rateLimit } = require('express-rate-limit');
const MongoStore = require('rate-limit-mongo');
// const REDIS = require('../classes/class.redis');

class Server {
    constructor() {
        this.mongoClient = null; // MongoDB client instance
        this.dbobj = null;
        // this.redisobj = new REDIS('redis://localhost:6379', '');
        this.redisobj=null;
        this.initSignals();
    }

    async start_worker() {
        await this.initMongoDB();
        let app = express();
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use(cookieParser());
        app.use(cors({ origin: "*", credentials: true }))
        // app.use(bodyParser.urlencoded({ extended: true }));
        // app.use(bodyParser.json());
        const limiter = rateLimit({
            windowMs: 1 * 60 * 1000, // 1 minute
            limit: 100000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
            standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
            legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
            store: new MongoStore({
                uri: CONFIG.DB_ENDPOINT + '/' + CONFIG.DB_NAME, // MongoDB URI + database name
                collectionName: 'rateLimits', // Collection to store rate limit data
                expireTimeMs: 1 * 60 * 1000, // Expire time (1 minute)
                errorHandler: console.error, // Handle MongoDB errors
            }),

            // message: 'why?'
            // store: ... , // Redis, Memcached, etc. See below.
        })
        app.use(limiter)

        app.use(session({
            secret: 'hello',  // Replace with your own secret key
            resave: false,              // Don't save session if unmodified
            saveUninitialized: true,    // Save uninitialized sessions
            // cookie: { secure: false, sameSite: 'None' }   // Set to true if using HTTPS
        }));

        app.use((req, res, next) => {
            res.locals.dbobj = this.dbobj;
            res.locals.redisobj = this.redisobj;
            console.log('Session in middleware:', req.session);
            // res.locals.session = session;
            next();
        });

        console.log(__dirname);
        app.use('/api', api_router.create())
        // app.use('/api', api_router.create())
        app.use(express.static(path.resolve(__dirname, '../../build')));
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, '../../build', 'index.html'));
        });
        app.get('/', function (req, res) { res.send('<h1>API ENDPOINT ' + last_deploy + '</h1>') });
        app.get('/api', function (req, res) { res.send('<h1>API ENDPOINT ' + last_deploy + '</h1>') });



        app.listen(CONFIG.PORT, () => {
            console.log(`RUNNING ON ${CONFIG.PORT}`);
        });
    }

    async initMongoDB() {
        try {
            this.mongoClient = new MongoClient(CONFIG.DB_ENDPOINT, { useNewUrlParser: true, useUnifiedTopology: true, maxPoolSize: 40 });
            await this.mongoClient.connect();
            // Set the database reference on a single variable
            this.dbobj = this.mongoClient.db(CONFIG.DB_NAME);
            console.log(`Connected to MongoDB`);
        } catch (error) {
            console.error(`Failed to connect to MongoDB: ${error}`);
            throw error;
        }
    }

    initSignals() {
        // Handle SIGINT (Ctrl+C) to gracefully close the MongoDB connection
        process.on('SIGINT', async () => {
            if (this.mongoClient) {
                console.log('Received SIGINT. Closing MongoDB connection...');
                await this.mongoClient.close();
                console.log('MongoDB connection closed.');
            }
            process.exit(0);
        });
    }
}

module.exports = Server;