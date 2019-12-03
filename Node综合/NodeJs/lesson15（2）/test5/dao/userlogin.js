/**
 * Created by Nan on 2016/11/16.
 */
var mysql = require('mysql');
var $conf = require('../conf/conf');
var $util = require('../util/util');

// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysqlOptions);
module.exports.queryByUser = function (userName, userPswd) {
    var $query = 'select * from login where userName=\'' + userName + '\' and passWord=\'' + userPswd + '\'';
    //连接数据库
    pool.getConnection(function (err, connection) {
        if (err) {
            return console.error(err)
        }
        //连接查询数据库
        connection.query($query, function (err, result) {
            if (err) return console.error(err);
            console.log(result);
            //if (typeof result === 'undefined') {
            //    var data = {code: '1', msg: '操作失败'};
            //    res.json(data);
            //} else {
            //    var data = {title: 'ejs', name: '高文雅', data: result[0]};
            //    res.json(data);
            //}
            //断开连接池
            connection.release();
        });
    });
};


