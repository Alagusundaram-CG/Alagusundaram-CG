const jwt = require('jsonwebtoken');
const CONFIG = require('../../common/inc.config')
module.exports = async (req, res, next) => {
    let token = req.headers['authorization'];
    console.log(token, typeof token, 'token');

    if (token && token !== 'null' && token !== 'undefined') {
        try {
            // Verify the token
            const decoded = jwt.verify(token, CONFIG.SECRET_KEY); // Replace 'your_secret_key' with your actual secret key
            req.user = decoded; // Store decoded user information in request object

            console.log('Token is valid:', decoded);
            next(); // Proceed to the next middleware or route handler
        } catch (err) {
            console.error('Token validation failed:', err.message);
            return res.send({ status: 'UA' });
        }
    } else {
        console.log('No valid token found');

        // next();
        res.send({ status: 'UA' });
    }
}