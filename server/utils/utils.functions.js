const nodemailer = require('nodemailer')
function error() {
    return { status: 'E', msg: 'Something went wrong' };
}
function generate_user_id(length) {
    const str_result = 'ABCDEFGHJKLMNPQRSTUVWXYZ1234567890zxcvbnmasdfghjklqwertyuiop';
    var user_id = '';
    for (let i = 0; i < length; i++) {
        user_id = user_id + (str_result.charAt(Math.floor(Math.random() * str_result.length)))
    }
    return user_id
}

async function create_user_id(dbobj) {
    let condition = true
    while (condition) {
        var user_id = generate_user_id(16);
        var find_user_id = await dbobj.collection('app_user_accounts').find({ user_id: user_id }).toArray();
        if (find_user_id.length != 0) {
            condition = true
        } else {
            condition = false
        }
    }
    return user_id;
}
function send_verification_email(email_data, verificationUrl) {
    // console.log(email_data);
    /**
     * email_data:{
     *  email_id:'xyz@gmail.com'
     *  otp: 12345,
     *  type: "Register or Login"
     * }
     */


    var transporter = nodemailer.createTransport({
        host: 'email-smtp.us-east-1.amazonaws.com',
        auth: {
            user: "AKIATDYJ22YDK4CCAYHY",
            pass: 'BPl70voLFryenMTlvhFd8XzBc+0/qf/lgG7ciHSJdP/1'
        }
    });


    var mailOptions = {
        from: {
            name: 'CG ESports',
            address: 'id@chennaigames.com'
        },
        to: email_data['email_id'],
        subject: 'Verify Your Email to Complete Your Registration',
        html: `<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><title>CG ESports - Account Verification</title><style>@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&family=Oswald:wght@400&display=swap);body{margin:0;padding:0;background-color:#0b0116;color:#f5f5f5;font-family:Roboto,sans-serif}.email-container{max-width:600px;margin:0 auto;background-color:#1c1132;padding:20px;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.5)}.email-header img{width:100%;height:auto;border-radius:8px}h2{font-family:Oswald,sans-serif;font-size:24px;text-align:center;color:#f60;margin-top:20px}p{font-size:16px;line-height:1.6;color:#c7c7c7;margin-bottom:20px}.verify-button{display:block;width:250px;margin:20px auto;padding:15px 25px;background-color:#f60;color:#fff;text-align:center;text-decoration:none;border-radius:5px;font-size:18px;font-family:Oswald,sans-serif;letter-spacing:1px;transition:background-color .3s}.verify-button:hover{background-color:#e65500}.email-footer{margin-top:40px;padding:10px 0;border-top:1px solid #333;display:flex;justify-content:space-between;align-items:center}.email-footer a{text-decoration:none;color:#999;font-size:12px}.email-footer img{width:80px}@media only screen and (max-width:600px){.email-container{padding:10px}.verify-button{width:100%}h2{font-size:20px}p{font-size:14px}.email-footer img{width:60px}}</style><div class=email-container><div class=email-header><img alt="Verify Your Account"src='https://chennaigames.com/images/cg_esports_big.jpg'></div><div class=email-body><h2>Verify Your Account</h2><p>Thanks for signing up! You're almost there. To complete the registration and activate your account, we just need to verify your email address.<p>Click the button below to verify your account:</p><a href='https://staging.chennaigames.com/esports/verify-account/${email_data['user_id']}' class=verify-button>Verify Now</a><p>If you didn’t create this account, no action is needed. Feel free to ignore this message.</div><div class=email-footer><a href='https://www.chennaigames.com/privacy_policy'>Privacy Policy</a> <img alt="Your Logo"src='https://1176818686.rsc.cdn77.org/general/html/charles_wright/logo.png'></div></div>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {

        }
    });
    return 'S';
}
function get_remaining_seconds(targettime) {
    var countDownDate = (new Date(targettime)).getTime();
    // Get today's date and time
    var now = (new Date()).getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var maintenance_time = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
    if (maintenance_time < 0 || maintenance_time == null || isNaN(maintenance_time)) {
        maintenance_time = 0;
    }
    return maintenance_time;
}
module.exports = {
    error,
    create_user_id,
    send_verification_email,
    get_remaining_seconds
}