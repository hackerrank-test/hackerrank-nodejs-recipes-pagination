var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/', function(req, res, next) {
    var page = req.query.page;
    var limit = req.query.limit;

    page = page === undefined ? 1 : page;
    limit = limit === undefined ? 3 : limit;

    res.status(200).json(recipes.slice(limit * (page - 1), limit * page));
    return next();
});
  
module.exports = router;

