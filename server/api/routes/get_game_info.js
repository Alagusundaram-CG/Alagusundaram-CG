const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let data = req.body;
        let dbobj = res.locals.dbobj;
        let game_data = await dbobj.collection('webgames').find({ game_id: data.id }).project({ _id: 0 }).limit(1).toArray();
        res.send(game_data[0]);
    }
    catch (err) {
        console.log(err);
    }
})
module.exports = router;