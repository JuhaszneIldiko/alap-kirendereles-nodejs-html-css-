module.exports = function (objRepo) {
    return (req, res, next) => {
        console.log(`URL: ${req.url}`);
        console.log(`Method: ${req.method}`);
        console.log(`Request body: ${req.body}`);
        console.log(`Response body: ${res.body}`);
        return next();
    }
}