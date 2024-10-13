const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let data = req.body;
        let dbobj = res.locals.dbobj;
        let game_id = data.game_id;
        // let type = data.type;
        if (game_id) {
            let find_query = { game_id: game_id }
            let check_game_rating = await dbobj.collection('webgames').find(find_query).limit(1).toArray();
            if (check_game_rating.length > 0) {
                let update_query = { $inc: {} }
                let vote_arr = data.data;
                for (let i = 0; i < vote_arr.length; i++) {
                    if (vote_arr[i].type == 1) {
                        update_query.$inc.likes = vote_arr[i].value
                    }
                    if (vote_arr[i].type == 2) {
                        update_query.$inc.dislikes = vote_arr[i].value
                    }

                }

                await dbobj.collection('webgames').updateOne(find_query, update_query)
            }
        }

        res.send({});
    }
    catch (err) {
        console.log(err);
    }
})
module.exports = router;