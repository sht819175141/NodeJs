/**
 * Created by yunhuan on 2016/12/20.
 */
var config = require("../configs/config");
var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
    res.render("index",
        {
            title: "index page",
            author: config.author,
            email: config.email
        }
    );
});
module.exports = router