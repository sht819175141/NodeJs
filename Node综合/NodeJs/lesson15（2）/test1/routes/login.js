/**
 * Created by Nan on 2016/11/15.
 */
var express = require('express');
var loginDao = require('../dao/login');
var routes = express.Router();


routes.get('/login', function (req, res) {
    res.render('login');
});

routes.post('/login', function (req, res) {
    var username =req.query;
    var password;
    console.log(username);
    //loginDao.login(req, res, username, password);
    //loginDao.login(req, res, username, password);
});

module.exports.login = routes;