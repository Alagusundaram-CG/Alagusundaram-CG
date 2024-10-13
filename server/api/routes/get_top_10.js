const express = require('express');
const router = express.Router();
const UTILS = require('../../utils/utils.functions');
const CONFIG = require('../../common/inc.config')
router.post('/', async (req, res) => {
    try {
        let data = req.body;
        // console.log("DATA");
        // console.log(data);
        let dbobj = res.locals.dbobj;
        let redisobj = res.locals.redisobj;
        // let type = data.type;
        let datas = [];
        let startRank = 1;
        let draw = data.draw;
        let start = parseInt(data.start);
        let user_id = req.body.user_id;
        // if (!user_id) {
        //     user_id = null;
        // }
        let limit = 10;//parseInt(data.length);
        let contest = parseInt(data.contest);
        // console.log(draw, data.start, data.length);
        let recordsTotal = 0;
        let recordsFiltered = 0;
        let end_time;
        if (CONFIG.CAN_USE_REDIS) {
            await redisobj.setDb(1);
            let leaderboard_data_from_redis = await redisobj.hgetData('LEADERBOARD', `${data.contest}`);
            if (!leaderboard_data_from_redis) {
                let leaderboard_data = await get_top_10_DB(dbobj, contest, start, limit, user_id, redisobj);
                datas = leaderboard_data.datas;
                end_time = leaderboard_data.end_time;
                recordsTotal = leaderboard_data.recordsTotal;
            } else {
                console.log('from redis');
                let redis_data = JSON.parse(leaderboard_data_from_redis);
                datas = redis_data.datas;
                end_time = redis_data.end_time;
            }
        } else {
            let leaderboard_data = await get_top_10_DB(dbobj, contest, start, limit, user_id, redisobj);
            datas = leaderboard_data.datas;
            end_time = leaderboard_data.end_time;
            recordsTotal = leaderboard_data.recordsTotal;

        }
        // console``.log(check_game_rating);
        let result = { draw: draw, recordsTotal: recordsTotal, recordsFiltered: recordsTotal, data: datas, end_time: end_time };
        // console.log(result);
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
})
module.exports = router;

async function get_top_10_DB(dbobj, contest, start, limit, user_id, redisobj) {
    let end_time = 0;
    let recordsTotal = 0;
    let datas = [];

    let find_query = { contest_id: contest };
    let check_game_rating = await dbobj.collection('leaderboard').find(find_query).skip(start).sort({ score: -1 }).limit(limit).project({ _id: 0 }).toArray();
    // console.log(check_game_rating.lengthm, 'len');

    if (check_game_rating.length > 0) {
        let contest_info = await dbobj.collection('app_contest').find(find_query).limit(1).project({ _id: 0 }).toArray();
        if (contest_info.length > 0) {
            end_time = contest_info[0].end_date;//(UTILS.get_remaining_seconds()) / 60;
        }
        recordsTotal = await dbobj.collection('leaderboard').countDocuments(find_query);
        let player_in_top_10 = false;
        for (let i = 0; i < check_game_rating.length; i++) {
            let current_player = 'N';
            if (check_game_rating[i].user_id == user_id) {
                current_player = 'Y';
                player_in_top_10 = true;
            }

            datas.push({
                rank: start + (i + 1),
                name: `<img src="../../images/leaderboard_icon/${Math.round(Math.random() * 5) + 1}.png" width=35/>&nbsp;&nbsp;&nbsp;` + check_game_rating[i].name.toUpperCase().replace('_', ' '),
                score: check_game_rating[i].score,
                reward: `<img src="../../images/coin.png" width=25/>&nbsp;&nbsp;${Math.round(Math.random() * 10000) + 1000}`,
                current_player: current_player
            });
            // startRank++;
        };
        console.log(player_in_top_10, '10');

        if (player_in_top_10 == false) {
            console.log(user_id, contest);

            var player_score = await dbobj.collection('leaderboard').find({ user_id: user_id, contest_id: contest, score: { $ne: 0 } }).project({ _id: 0, }).limit(1).toArray();
            if (player_score.length > 0) {
                console.log(user_id, 'userid');

                var pos = await dbobj.collection('leaderboard').countDocuments({ contest_id: contest, score: { $gte: player_score[0].score } });
                datas.push({
                    rank: pos,
                    name: `<img src="../../images/leaderboard_icon/${Math.round(Math.random() * 5) + 1}.png" width=35/>&nbsp;&nbsp;&nbsp;` + player_score[0].name.toUpperCase().replace('_', ' '),
                    score: player_score[0].score,
                    reward: `<img src="../../images/coin.png" width=25/>&nbsp;&nbsp;${Math.round(Math.random() * 10000) + 1000}`,
                    current_player: 'Y'
                });
            }
        }
        if (CONFIG.CAN_USE_REDIS) {
            await redisobj.setDb(1);
            await redisobj.hsetData('LEADERBOARD', `${contest}`, JSON.stringify({ end_time, datas }))
            await redisobj.expire('LEADERBOARD', 2592000);
        }
    }
    return { end_time, recordsTotal, datas };
}