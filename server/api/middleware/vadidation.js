module.exports = async (req, res, next) => {
    //console.log(req.body, req.url);
    console.log('middleware', req.url);

    // console.log(req.session);
    // console.log(res.locals.session);
    next();
}