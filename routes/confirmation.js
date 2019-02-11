var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('confirmation', { title: 'Registered' });
});

module.exports = router;
