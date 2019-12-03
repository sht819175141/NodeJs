/**
 * Created by Nan on 2016/11/16.
 */
var mysql = require('mysql');
var $conf = require('../conf/conf');
var pool = mysql.createConnection($conf.mysqlOptions);

module.exports = {
    jsonWrite: function (res, result) {
        if (typeof result === 'undefined') {
            var data = {code: '1', msg: '����ʧ��'};
            res.json(data);
        } else {
            var data = {title: 'ejs', name: '������', data: result[0]};
            res.json(data);
        }
    },
    rediretPage: function (res, result, rediret) {
        if (typeof result === 'undefined') {
            var data = {code: '1', msg: '����ʧ��'};
            res.render('error', data);
        } else {
            var data = {title: 'ejs', name: '������', data: result[0]};
            res.render(rediret, data);
        }
    },
    queryById: function (req, res) {
        var id = +req.query.id; // Ϊ��ƴ����ȷ��sql��䣬����Ҫת������
        pool.getConnection(function (err, connection) {
                connection.query($sql.queryById, id, function (err, result) {
                    this.jsonWrite(res, result);
                    connection.release();

                });
            }
        )
        ;
    },
    queryByUser: function (req, res, name, pswd) {
        var queryStr = 'select * from login where userName=' + name + '&&passWord=' + pswd;
        console.log(queryStr);
        pool.getConnection(function (err, connection) {
            connection.query('select * from login', function (err, result) {
                console.log(result);
                connection.release();

            });
        });
    }
    ,
    queryAll: function (req, res) {
        pool.getConnection(function (err, connection) {
            connection.query($sql.queryAll, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }

}
;