const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log(req.body);

        let user_id = req.body.id;
        let dbobj = res.locals.dbobj;
        // console.log(token, typeof token);
        let find_query = { user_id: user_id };
        console.log(find_query);
        let validate_id = await dbobj.collection('app_user_accounts').find(find_query).limit(1).toArray();
        console.log(validate_id);
        if (validate_id.length > 0) {
            let update_parameter = { $set: { validated: 1, verification_token: null } };
            await dbobj.collection('app_user_accounts').updateOne(find_query, update_parameter);
            return res.status(200).json({ message: 'Verification Success' });
        }
        else {
            return res.status(400).json({ message: 'Verification failed. Please try again.' });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Verification failed. Please try again.' });

    }

});
module.exports = router;