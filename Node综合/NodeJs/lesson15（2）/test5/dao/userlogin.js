/**
 * Created by Nan on 2016/11/16.
 */
var mysql = require('mysql');
var $conf = require('../conf/conf');
var $util = require('../util/util');

// ʹ�����ӳأ���������
var pool = mysql.createPool($conf.mysqlOptions);
module.exports.queryByUser = function (userName, userPswd) {
    var $query = 'select * from login where userName=\'' + userName + '\' and passWord=\'' + userPswd + '\'';
    //�������ݿ�
    pool.getConnection(function (err, connection) {
        if (err) {
            return console.error(err)
        }
        //���Ӳ�ѯ���ݿ�
        connection.query($query, function (err, result) {
            if (err) return console.error(err);
            console.log(result);
            //if (typeof result === 'undefined') {
            //    var data = {code: '1', msg: '����ʧ��'};
            //    res.json(data);
            //} else {
            //    var data = {title: 'ejs', name: '������', data: result[0]};
            //    res.json(data);
            //}
            //�Ͽ����ӳ�
            connection.release();
        });
    });
};


