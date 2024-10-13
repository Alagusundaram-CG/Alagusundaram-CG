const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const UTILS = require('../../utils/utils.functions')

router.post('/', async (req, res) => {
    try {
        let status = 'S';
        let msg = "SUCCESS";
        let response_code = 1;

        let data = req.body;
        let dbobj = res.locals.dbobj;
        let email_id = data.email_id;
        let password = data.password;
        let user_name = data.user_name;
        // let profilepic = data.profilepic;
        let dob = data.dob;
        let gender = data.gender;
        let location = data.location;
        console.log(data);
        if (email_id && password && user_name && dob && gender && location) {
            let user_id
            let check_mailid = await dbobj.collection('app_user_accounts').find({ email_id: email_id }).limit(1).toArray();
            if (check_mailid.length == 0) {
                const salt = await bcrypt.genSalt(10);
                let encrypt_password = await bcrypt.hash(password, salt);
                user_id = await UTILS.create_user_id(dbobj);
                let verification_token = crypto.randomBytes(20).toString('hex');
                let insert_obj = {
                    user_id: user_id,
                    email_id: email_id,
                    password: encrypt_password,
                    user_name,
                    // profilepic,
                    dob,
                    gender,
                    location,
                    verification_token: verification_token,
                    validated: 0,
                    crd_on: new Date(),
                    stat: 'A'
                }
                await dbobj.collection('app_user_accounts').insertOne(insert_obj);
                let coin_obj = {
                    user_id: user_id,
                    coins: 0,
                    tickets: 0
                }
                await dbobj.collection('app_coin_balance').insertOne(coin_obj);
                const verificationUrl = `http://localhost:3001/api/verify_email?token=${verification_token}`;
                let email_data = {
                    email_id: email_id,
                    user_id: user_id
                }
                UTILS.send_verification_email(email_data, verificationUrl);

            }
            else {
                msg = 'Email already exist';
                response_code = 2;
            }
            response = {
                status: status,
                msg: msg,
                response_code: response_code,
                user_id: user_id,
                uname: user_name
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