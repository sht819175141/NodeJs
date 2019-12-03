/**
 * Created by Nan on 2016/12/14.
 */
var userlogin = require('../modules/login');
var express = require('express');
var router = express.Router();

router.get('/userlogin', function (req, res) {
    var username = req.query.username;
    var password = req.query.password;
   

    var rows;
    userlogin.login(username, password, function (err, result) {
        if (err) return console.error(err);
        if (result.length > 0) {
            rows = {
                code: 0,
                errMsg: "",
                result: result[0]
            }
        }
        else {
            rows = {
                code: 1,
                errMsg: "error"
            }
        }
        res.json(rows);
    });
});

module.exports = router;