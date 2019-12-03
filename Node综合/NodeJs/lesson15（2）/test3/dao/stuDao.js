/**
 * Created by Nan on 2016/11/14.
 */
//实现mysql 交互
var mysql = require('mysql');
var $conf = require('../conf/conf');
var $util = require('../util/util');
var $sql = require('./mapDao');


// 使用连接池，提升性能
var pool = mysql.createPool($util.extend({}, $conf.mysqlOptions));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        //res.json(ret);
        res.render('index.html', {title: 'ejs', name: '高文雅', data: ret});
    }
};


module.exports = {
    queryById: function (req, res) {
        var id = +req.query.id; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function (err, connection) {
            connection.query($sql.queryById, id, function (err, result) {
                jsonWrite(res, result);
                connection.release();

            });
        });
    },
    queryAll: function (req, res) {
        pool.getConnection(function (err, connection) {
            connection.query($sql.queryAll, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }

};