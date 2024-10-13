const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log('constest');
        let data = req.body;
        let game_id = data.id;
        let dbobj = res.locals.dbobj;
        let find_query = { game_id: game_id, stat: 'A', start_date: { $lt: new Date() } };
        let game_data = await dbobj.collection('app_contest').find(find_query).sort({ end_date: -1 }).project({ _id: 0 }).limit(10).toArray();

        let contests = [];
        if (game_data.length > 0) {
            for (let i = 0; i < game_data.length; i++) {

                contests.push({
                    name: game_data[i].contest,
                    end_time: game_data[i].end_date,
                    id: game_data[i].contest_id
                })
            }
        }
        let response = contests;
        res.send(response);
    }
    catch (err) {
        console.log(err);
    }
})
module.exports = router;