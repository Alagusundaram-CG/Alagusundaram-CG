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
                value: data.rating,
                stat: 'A'
            }
            await dbobj.collection('game_rating').insertOne(insert_obj);

        }
        res.send({});
    }
    catch (err) {
        console.log(err);
    }
})
module.exports = router;