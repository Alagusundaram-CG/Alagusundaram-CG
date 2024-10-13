const express = require('express').Router;
const validation = require('./middleware/vadidation');
const Auth = require('./middleware/auth');
class api_router {

    create() {
        let route = express();
        route.use(validation)
        // console.log('incoming');
        route.use('/sample', require('../api/routes/sample'))

        route.use('/get_webgames', require('../api/routes/get_webgames'))
        route.use('/game_count', require('../api/routes/game_count'))
        route.use('/rate_game', require('../api/routes/rate_game'))
        route.use('/report', require('../api/routes/report'))

        route.use('/get_promocode', require('../api/routes/get_promocode'))
        route.use('/share_your_game', require('../api/routes/share_your_game'))
        route.use('/login_user', require('../api/routes/login_user'))
        route.use('/sign_up', require('../api/routes/sign_up'))
        route.use('/verify_email', require('../api/routes/verify_email'))
        route.use('/session', require('../api/routes/session'))
        route.use('/get_top_10', require('../api/routes/get_top_10'))
        route.use('/get_contest', require('../api/routes/get_contest'))
        route.use('/get_game_info', require('../api/routes/get_game_info'))
        route.use('/check_email', require('../api/routes/check_email'))

        route.use(Auth)
        route.use('/score_submission', require('../api/routes/score_submission'))
        route.use('/like_dislike', require('../api/routes/like_dislike'))
        route.use('/get_profile_details', require('../api/routes/get_profile_details'))

        return route;
    }
}

module.exports = new api_router();