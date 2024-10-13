const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const redis = require('redis');
const { MongoClient } = require('mongodb');
const { uniqueNamesGenerator, names, animals } = require('unique-names-generator');
// const user = require('../redis_lb/api/db/user');
const randomName = uniqueNamesGenerator({ dictionaries: [names, animals] }); // big_red_donkey
const redisclient = redis.createClient();
//const LEADERBOARD1 = 'HRX_SCR';
const url = 'mongodb://localhost:27017';//mongodb+srv://ludoxdb:t9YPlZTXgQWmEobH@cluster0.sxh5ddc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const { promisify } = require("util");
const cors = require('cors');
const bodyParser = require('body-parser');

var GID_START = 1;
var MAX_RECORD_INSERT = 5000000;
var SCORE_BENCHMARK = 100000;

const rdb = (func) => {
    return promisify(redisclient[func]).bind(redisclient);
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.get('/add_points', async function (req, res) {
    try {
        console.log('Add Players Process Started');
        const client = new MongoClient(url);
        const dbName = 'cg_web_game';
        await client.connect();
        console.log('MongoDB Connected Sucessfully');
        const db = client.db(dbName);


        // const redisclient = redis.createClient();
        // redisclient.on('error', (err) => console.log('Redis Client Error', err));
        // await redisclient.connect();

        var findLast = await db.collection("leaderboard").find().sort({ user_id: -1 }).limit(1).toArray();
        if (findLast.length > 0) {
            GID_START = findLast[0].user_id + 1;
            MAX_RECORD_INSERT = MAX_RECORD_INSERT + findLast[0].user_id;
        }

        for (let index = GID_START; index <= MAX_RECORD_INSERT; index++) {

            const shortName = uniqueNamesGenerator({
                dictionaries: [names, animals], // colors can be omitted here as not used
                length: 2
            }); // big-donkey

            let user_data = {
                user_id: index,
                // name: shortName,
                // // league: Math.floor(Math.random() * 16),
                // context: 'BMW X',
                // // o_unit: get_o_unit('YN'),
                // scr: Math.floor(Math.random() * SCORE_BENCHMARK),
                // drift: Math.floor(Math.random() * SCORE_BENCHMARK),
                // turner: Math.floor(Math.random() * SCORE_BENCHMARK),
                // racer: Math.floor(Math.random() * SCORE_BENCHMARK),
                // t_wins: Math.floor(Math.random() * 100)
                contest_id: 1,
                contest_name: 'BMW X',
                score: Math.floor(Math.random() * SCORE_BENCHMARK),
                avatar: Math.floor(Math.random() * 6),
                name: shortName,
                crd_on: new Date(),
                mdy_on: new Date(),
                status: 'A'
            };

            const insertResult = await db.collection('leaderboard').insertOne(user_data);
            // const redisData = await redisclient.zadd(['HRX_SCORE', user_data.scr, user_datauser_id]);
            // const redisData1 = await redisclient.zadd(['HRX_DRIFT', user_data.drift, user_datauser_id]);
            // const redisData2 = await redisclient.zadd(['HRX_TURNER', user_data.turner, user_datauser_id]);
            // const redisData3 = await redisclient.zadd(['HRX_RACER', user_data.racer, user_datauser_id]);
            console.log(insertResult);
        }
        res.send({ status: findLast });
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('Add Players Process Finished');
    }
});

app.post('/get_top_10', async function (req, res) {
    //console.log(req.body.type);
    console.log('Add Players Process Started');
    const client = new MongoClient(url);
    const dbName = 'leaderboard';
    await client.connect();
    console.log('MongoDB Connected Sucessfully');
    const db = client.db(dbName);

    var results = await rdb('zrevrange')(['HRX_' + req.body.type, 0, 9, 'WITHSCORES']);
    console.log(results);
    const data = [];
    let startRank = 1;
    for (let i = 0; i < results.length; i += 2) {
        let user_data = await db.collection('leaderboard').find({ gid: parseInt(results[i]) }).toArray();


        data.push({
            rank: startRank,
            gid: user_data[0].user_id,
            name: user_data[0].name.toUpperCase().replace('_', ' '),
            league: "<center><img src='assets/leagues/" + user_data[0].league + ".png' style='width:30px;'/></center>",
            o_unit: "<center><img src='assets/nft_" + user_data[0].o_unit.toLowerCase() + ".png'/></center>",
            t_wins: user_data[0].t_wins,
            scr: results[i + 1],
        });
        startRank++;
    }
    let result = { draw: 10, recordsTotal: 10, recordsFiltered: 10, data: data };
    res.send(result);
});

app.post('/update', async function (req, res) {
    console.log('Add Players Process Started');
    const client = new MongoClient(url);
    const dbName = 'leaderboard';
    await client.connect();
    console.log('MongoDB Connected Sucessfully');
    const db = client.db(dbName);

    console.log(req.body);
    const redisclient = redis.createClient();
    redisclient.on('error', (err) => console.log('Redis Client Error', err));
    var updatetype = req.body.type;
    var scr = parseInt(req.body.scr);
    var myquery = { gid: parseInt(req.bodyuser_id) };
    var updset = {};

    if (updatetype == 'SCORE') {
        updset = { $set: { scr: scr } };
    }
    else if (updatetype == 'DRIFT') {
        updset = { $set: { drift: scr } };
    }
    else if (updatetype == 'TURNER') {
        updset = { $set: { turner: scr } };
    }
    else if (updatetype == 'RACER') {
        updset = { $set: { racer: scr } };
    }
    console.log(myquery, updset);

    const insertResult = await db.collection('leaderboard').updateOne(myquery, updset);
    console.log(insertResult);

    const redisData = await redisclient.zadd(['HRX_' + req.body.type, req.body.scr, req.bodyuser_id]);
    res.send({ status: "S" });
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

function get_o_unit(data) {
    var str_result = data;
    r_code = str_result.charAt(Math.floor(Math.random() * str_result.length));
    return r_code
}


const dev_str = 'abcdefghijklmnopqrstuvwxyz1234567890';

function get_device_id(length) {
    var device_id = '';
    for (let i = 0; i < length; i++) {
        device_id = device_id + (dev_str.charAt(Math.floor(Math.random() * dev_str.length)))
    }
    return device_id
}