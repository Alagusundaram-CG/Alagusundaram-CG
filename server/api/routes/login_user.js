const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const UTILS = require('../../utils/utils.functions')
const jwt = require('jsonwebtoken')
const CONFIG = require('../../common/inc.config')
router.post('/', async (req, res) => {
    console.log(req.body);
    let response = {};
    try {
        let status = 'S';
        let msg = "SUCCESS";
        let response_code = 1;
        let data = req.body;
        let email_id = data.email_id;
        let password = data.password;
        let dbobj = res.locals.dbobj;
        if (email_id && password) {
            let user_id
            let find_query = { email_id: email_id, stat: 'A' };
            let check_user = await dbobj.collection('app_user_accounts').find(find_query).limit(1).toArray();
            if (check_user.length > 0) { //login
                let password_check = await bcrypt.compare(password, check_user[0].password);
                let validated = check_user[0].validated;
                user_id = check_user[0].user_id;
                if(validated === 0)
                {
                    response = {
                        status: status,
                        msg: 'Please verify your email!',
                        response_code: 2,
                    }
                }
                else if(validated === 1)
                {
                    if (!password_check) {
                        response_code = 2;
                        msg = 'Invalid Password';
                        user_id = ''
                    }
                    let user_data = {
                        id: user_id,
                        username: email_id
                    };
                    req.session.user = user_data;
                    // req.session.username = 'all good'
                    // console.log(req.session);
    
                    let token = jwt.sign(user_data, CONFIG.SECRET_KEY, { expiresIn: '1h' })
                    response = {
                        status: status,
                        msg: msg,
                        response_code: response_code,
                        user_id: user_id,
                        uname: check_user[0].user_name,
                        token: token
                    }
                }
                
            } else {
                response = {
                    status: status,
                    msg: 'Account Does not exist',
                    response_code: 2,
                }
            }
        } else {
            response = {
                status: status,
                msg: 'Invalid Credentials',
                response_code: 2,
            }
        }
    }
    catch (error) {
        console.log(error);
        response = UTILS.error();

    }
    finally {
        console.log('response::::::::::;;;', JSON.stringify(response));
        res.send(response);
    }
})
module.exports = router;