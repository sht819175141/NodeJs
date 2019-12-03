/**
 * Created by Nan on 2016/11/12.
 */

var express = require('express');
var routes = express.Router();

routes.post('/register', function (req, res) {
    var data = {errCode: 0, errMessage: '', name: 'haonan', isSuccess: true};
    res.json(data);
});

module.exports.submit = routes;