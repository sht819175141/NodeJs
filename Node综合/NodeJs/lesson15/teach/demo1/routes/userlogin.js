/**
 * Created by Nan on 2016/12/13.
 */
var login = require('../modules/login');
var express = require('express');
var router = express.Router();


router.post('/userlogin', function (req, res) {
    var data = login.userlogin();
    var username = req.body.username;
    var password = req.body.password;


    console.log(data.username);
    console.log(data.passwrod);
    if (username == data.username && password == data.passwrod){
        res.end('login success');
    }

    res.end('login faild');
    //res.json({name:'haonan',password:'123'});
});

module.exports = router;