/**
 * Created by Nan on 2016/11/16.
 */
var express = require('express');

var routes = express.Router();


routes.get('/login', function (req, res) {
    res.render('login', {title: '登陆'})
});

module.exports.login = routes;