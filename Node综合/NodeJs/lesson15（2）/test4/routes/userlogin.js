/**
 * Created by Nan on 2016/11/16.
 */
var userloginDao = require('../dao/userlogin');
var express = require('express');
var routes = express.Router();


routes.post('/userlogin', function (req, res) {
    var username = req.body.user;
    var userpswd = req.body.pswd;
    console.log(typeof(username));
    console.log(typeof(userpswd));
    //userloginDao.queryByUser(req, res, username, userpswd);
});

module.exports.login = routes;