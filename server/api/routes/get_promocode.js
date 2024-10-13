const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {

    let status = "E";
    let msg = "Code Not Available";
    try {
        let data = req.body;
        let dbobj = res.locals.dbobj;
        let game_data = await dbobj.collection('mr_racer_promocodes').find({ is_redeemed: "N" }).project({ _id: 0, promocode: 1 }).limit(1).toArray();
        if (game_data.length > 0) {
            status = "S";
            msg = "Success";
            data = game_data[0];

            await dbobj.collection('mr_racer_promocodes').updateOne({promocode:game_data[0].promocode},{$set:{is_redeemed:"Y",mdy_on:new Date()}});
        }

        let response = {status:status,msg:msg,data};
        res.send(response);
    }
    catch (err) {
        console.log(err);
        let response = {status:status,msg:msg};
        res.send(response);
    }
})
module.exports = router;