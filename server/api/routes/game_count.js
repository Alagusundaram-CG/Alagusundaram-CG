const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let data = req.body;
        let dbobj = res.locals.dbobj;
        if (data.game_id) {
            await dbobj.collection('webgames').updateOne({ game_id: data.game_id }, { $inc: { count: 1 } })
        }
        res.send({});
    }
    catch (err) {
        console.log(err);
    }
})
module.exports = router;