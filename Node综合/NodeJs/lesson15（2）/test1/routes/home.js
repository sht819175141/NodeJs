/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var user = require('../dao/user');
var routes = express.Router();


console.log(user.user);
routes.get('/', function (req, res) {
    //res.render('index',{title:'首页'});
    //var datas = user;
    //console.log(datas);
    //res.render('login.html', {title: 'ejs', name: '高文雅', users: datas});
    user.user(req, res);
});

module.exports.home = routes;