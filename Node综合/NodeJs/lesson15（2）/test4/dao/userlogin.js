/**
 * Created by Nan on 2016/11/16.
 */
var mysql = require('mysql');
var $conf = require('../conf/conf');
var $util = require('../util/util');
var $sql = require('./mappingDao');


var options = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'media'
};

// ʹ�����ӳأ���������
var pool = mysql.createPool($util.extend({}, options));
// ��ǰ̨����JSON�����ļ򵥷�װ
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '����ʧ��'
        });
    } else {
        //res.json(ret);
        res.render('index.html', {title: 'ejs', name: '������', data: ret});
    }
};
module.exports = {
    queryById: function (req, res) {
        var id = +req.query.id; // Ϊ��ƴ����ȷ��sql��䣬����Ҫת������
        pool.getConnection(function (err, connection) {
            connection.query($sql.queryById, id, function (err, result) {
                jsonWrite(res, result);
                connection.release();

            });
        });
    },
    queryByUser: function (req, res, name, pswd) {
        var queryStr = 'select * from login where userName=' + name + '&&passWord=' + pswd;
        console.log(queryStr);
        pool.getConnection(function (err, connection) {
            connection.query('select * from login', function (err, result) {
                //connection.query(queryStr, function (err, result) {
                console.log(result);
                //jsonWrite(res, result);
                connection.release();

            });
        });
    },
    queryAll: function (req, res, name, pswd) {
        pool.getConnection(function (err, connection) {
            connection.query($sql.queryAll, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }

};