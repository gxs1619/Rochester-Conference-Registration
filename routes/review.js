var express = require('express');
var router = express.Router();

router.post("/", function(req, res, next){
    res.render("review", { title: "Review"});
});

module.exports = router;