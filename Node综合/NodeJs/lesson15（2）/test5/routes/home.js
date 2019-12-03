/**
 * Created by Nan on 2016/11/16.
 */
var express = require('express');
var routes = express.Router();


routes.get('/', function (req, res) {
    res.render('index', {title: '首页'})
});

module.exports.home = routes;