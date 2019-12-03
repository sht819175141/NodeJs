/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var routes = express.Router();

var studentDao = require('../dao/stuDao');

routes.get('/', function (req, res) {
    //res.render('index',{title:'首页'});
    //var data = studentDao.queryAll(req, res);
    //res.render('login.html', {title: 'ejs', name: '高文雅', data: data});
    //res.render('login.html', {title: 'ejs', name: '高文雅'});
    studentDao.queryAll(req, res);
});

module.exports.home = routes;