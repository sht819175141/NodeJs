/**
 * Created by Nan on 2016/11/16.
 */


var express = require('express');
var _home = require('./home');
var _login = require('./login');
var _userlogin = require('./userlogin');

module.exports = function (app) {
    app.get('/', _home.home);
    app.get('/login', _login.login);
    app.post('/userlogin', _userlogin.login);
};