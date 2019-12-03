/**
 * Created by Nan on 2016/11/16.
 */
var userlogin = require('../dao/userlogin');
var express = require('express');
var routes = express.Router();


routes.post('/userlogin', function (req, res) {
    var username = req.body.user;
    var userpswd = req.body.pswd;
    var user = userlogin.loginState();
    if (username == user.userName && userpswd == user.passWord) {
        var data = {errCode: '0', errMessage: '', data: {name: 'haonan'}, isSuccess: true};
        res.json(data);
    } else {
        var data = {errCode: '1', errMessage: '账号或密码错误', data: {}, isSuccess: false};
        res.json(data);
    }
});

module.exports.login = routes;