const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    // app.get('/session', function (req, res, next) {
    console.log('session', req.session);
    if (req.session.views) {

        // Increment the number of views.
        req.session.views++

        // Session will expires after 1 min
        // of in activity
        res.write('<p> Session expires after 1 min of in activity: ' + (req.session.cookie.expires) + '</p>'
        )
        res.end()
    } else {
        req.session.views = 1
        res.end(' New session is started')
    }
})
module.exports = router;
