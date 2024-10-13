const express = require('express');
const router = express.Router();
const UTILS = require('../../utils/utils.functions')

router.post('/', async (req, res) => {
    let response = {}
    try {
        let status = 'S';
        let msg = "SUCCESS";
        let response_code = 1;

        let data = req.body;
        let score = data.score;
        let game_id = data.game_id;
        let user_id = data.user_id;
        let name = data.name;

        let dbobj = res.locals.dbobj;

        if (score && game_id && user_id) {
            let live_contest = await dbobj.collection('app_contest').find({ game_id: game_id, stat: 'A' }).limit(1).toArray();
            if (live_contest.length > 0) {
                let check_player = await dbobj.collection('leaderboard').find({ user_id: user_id, contest: contest }).limit(1).toArray();
                if (check_player.length == 0) {
                    let insert_obj = {
                        user_id: user_id,
                        name: name,
                        contest_id: live_contest[0].contest,
                        scr: score
                    }
                    await dbobj.collection('leaderboard').insertOne(insert_obj);
                } else {
                    if (check_player[0].scr < score) {
                        await dbobj.collection('leaderboard').updateOne({ user_id: user_id, contest: contest }, { $set: { scr: score } });
                    }
                }
            } else {
                response_code = 2;
                msg = 'No Contest Available';
            }
        } else {
            response_code = 2;
            msg = 'Invalid Request';
        }
        response = {
            status: status,
            response_code: response_code,
            msg: msg
        }
    }
    catch (error) {
        console.log(error);
        response = UTILS.error();
    }
    finally {
        console.log('response::::::::::;;;', JSON.stringify(response));
        res.send(response);
    }
})
module.exports = router;