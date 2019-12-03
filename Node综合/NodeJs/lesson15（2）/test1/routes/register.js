/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var routes = express.Router();

routes.get('/register', function (req, res) {
    res.render('register');
});
module.exports.register = routes;

