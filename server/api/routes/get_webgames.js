const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let dbobj = res.locals.dbobj;
        let find_query = {}
        let data = req.body;
        // console.log(req.session);
        if (!req.session.games) {
            req.session.games = 'webgames'
            // console.log('after', req.session);
        }
        if (data.game_ids) {
            find_query = { game_id: { $nin: data.game_ids } }
        }
        if (data.game_name) {
            find_query = { title: { $regex: data.game_name, $options: "i" } }
        }
        console.log(find_query);
        let games = await dbobj.collection('webgames').find(find_query).project({ _id: 0 }).sort({ _id: 1 }).toArray();
        res.send(games);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        dbobj = null;
    }
})
module.exports = router;