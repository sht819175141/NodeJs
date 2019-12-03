/**
 * Created by Nan on 2016/12/13.
 */

var userlogin = require('../modules/login');
var express = require('express');
var router = express.Router();

router.post('/userlogin', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    userlogin(username,password,res);
});

module.exports = router;