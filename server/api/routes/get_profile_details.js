const express = require('express');
const router = express.Router();
const CONFIG = require('../../common/inc.config');
const jwt = require('jsonwebtoken');
const UTILS = require('../../utils/utils.functions');

router.post('/', async (req, res) => {
    let response = {};
    try {
        let status = 'S';
        let msg = "SUCCESS";
        let response_code = 1;

        let data = req.body;
        let dbobj = res.locals.dbobj;
        let redisobj = res.locals.redisobj;

        let token = req.headers['authorization'];
        let coins = 0;
        let tickets = 0;
        let name = '';

        const decoded = jwt.verify(token, CONFIG.SECRET_KEY); // Replace 'your_secret_key' with your actual secret key
        let user_id = decoded.id;
        if (CONFIG.CAN_USE_REDIS == true) {
            await redisobj.setDb(1);
            let user_details = await redisobj.getData(`${user_id}`);
            if (user_details) {
                user_details = JSON.parse(user_details);
                name = user_details.name;
                coins = user_details.coins;
                tickets = user_details.tickets;

            } else {
                let get_user_details = await get_user_info_DB(user_id, dbobj, redisobj);
                if (get_user_details.user_data_available) {
                    name = get_user_details.name;
                    coins = get_user_details.coins;
                    tickets = get_user_details.tickets;

                } else {
                    response_code = 2;
                    msg = 'Invalid User';
                }

            }

        } else {

            let get_user_details = await get_user_info_DB(user_id, dbobj, redisobj);
            if (get_user_details.user_data_available) {
                name = get_user_details.name;
                coins = get_user_details.coins;
                tickets = get_user_details.tickets;

            } else {
                response_code = 2;
                msg = 'Invalid User';
            }
        }
        response = {
            status: status,
            response_code: response_code,
            msg: msg,
            coins: coins,
            tickets: tickets,
            name: name,
        }
        console.log(response);

        res.send(response)

    }
    catch (err) {
        console.log(err);
        response = UTILS.error();
        res.send(response);
    }
})
module.exports = router;

async function get_user_info_DB(user_id, dbobj, redisobj) {
    let name = '';
    let coins = 0;
    let tickets = 0;
    let user_data_available = false;
    let get_user_details = await dbobj.collection('app_user_accounts').find({ user_id: user_id, stat: 'A' }).toArray();
    if (get_user_details.length > 0) {
        name = get_user_details[0].user_name;
        let get_coin_details = await dbobj.collection('app_coin_balance').find({ user_id: user_id }).toArray();
        if (get_coin_details.length > 0) {
            coins = get_coin_details[0].coins;
            tickets = get_coin_details[0].tickets;
            user_data_available = true;
            let user_obj = {
                name: name,
                coins: coins,
                tickets: tickets
            }
            if (CONFIG.CAN_USE_REDIS == true) {
                await redisobj.setDb(1);
                await redisobj.setData(`${user_id}`, JSON.stringify(user_obj))
                await redisobj.expire(`${user_id}`, 604800)
            }
        }
    }
    return { user_data_available, name, coins, tickets }
}