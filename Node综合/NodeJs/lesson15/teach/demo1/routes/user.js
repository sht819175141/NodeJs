/**
 * Created by Nan on 2016/12/12.
 */
//方法一：
//抛出一个方法，让express实例化后的对象app去匹配
//module.exports = function (req, res) {
//    res.send('user page')
//};
//方法一：
//抛出一个方法，让express实例化后的对象app去匹配 一个 express.Router()
var express = require('express');
var router = express.Router();


router.get('/user', function (req, res) {
    //res.send('user page')
    res.render('user');
});

module.exports = router;