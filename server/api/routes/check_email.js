const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    let response;
    try {
        console.log(req.body);

        let email_id = req.body.email_id;
        let dbobj = res.locals.dbobj;
        // console.log(token, typeof token);
        let find_query = { email_id: email_id };
        console.log(find_query);
        let check_email_id = await dbobj.collection('app_user_accounts').find(find_query).limit(1).toArray();
        console.log(check_email_id);
        if (check_email_id.length > 0) {
            response = {
                status: 'S',
                response_code: 1,
            }
        }
        else {
            response = {
                status: 'S',
                response_code: 2,
            }
        }
        res.send(response);
    }
    catch (error) {
        console.log(error);
        response = UTILS.error();
        res.send(response)
    }

});
module.exports = router;