/**
 * Created by Nan on 2016/11/14.
 */
//ʵ��mysql ����
var mysql = require('mysql');
var $conf = require('../conf/conf');
var $util = require('../util/util');
var $sql = require('./mapDao');


// ʹ�����ӳأ���������
var pool = mysql.createPool($util.extend({}, $conf.mysqlOptions));

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
    queryAll: function (req, res) {
        pool.getConnection(function (err, connection) {
            connection.query($sql.queryAll, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }

};