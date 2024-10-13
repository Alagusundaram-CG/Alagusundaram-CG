const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    let response = {};
    try {
        let data = req.body.data;
        let dbobj = res.locals.dbobj;
        // console.log(data);
        let name = data.name;
        let email_id = data.email_id;
        let studio_name = data.studio_name;
        let game_title = data.title;
        let link = data.link;
        let engine = data.engine;
        let info = data.info;
        // console.log((name, email_id), (studio_name, game_title), (link, engine), info);
        if (name && email_id && studio_name && game_title && link && engine && info) {

            let insert_obj = {
                name: name,
                email_id: email_id,
                studio_name: studio_name,
                game_title: game_title,
                link: link,
                engine: engine,
                info: info,
                stat: 'A'
            }
            await dbobj.collection('game_submit_request').insertOne(insert_obj);
            response = {
                status: 'S',
                msg: 'success'
            }
        } else {
            response = {
                status: 'E',
                msg: 'No data'
            }
        }




    }
    catch (err) {
        // console.log(err);
        response = {
            status: 'E',
            msg: err
        }
    } finally {
        res.send(response);
    }
})
module.exports = router;