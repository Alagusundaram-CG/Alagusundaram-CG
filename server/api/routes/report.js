const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let data = req.body;
        let dbobj = res.locals.dbobj;
        let game_id = data.game_id
        if (game_id) {

            let insert_obj = {
                game_id: game_id,
                data: data.data,
                stat: 'A'
            }
            await dbobj.collection('report_game').insertOne(insert_obj);
        }
        res.send({});
    }
    catch (err) {
        console.log(err);
    }
})
module.exports = router;