/**
 * Created by Nan on 2016/11/16.
 */
var mysql = require('mysql');
var $conf = require('../conf/conf');
var pool = mysql.createConnection($conf.mysqlOptions);

module.exports = {
    jsonWrite: function (res, result) {
        if (typeof result === 'undefined') {
            var data = {code: '1', msg: '操作失败'};
            res.json(data);
        } else {
            var data = {title: 'ejs', name: '高文雅', data: result[0]};
            res.json(data);
        }
    },
    rediretPage: function (res, result, rediret) {
        if (typeof result === 'undefined') {
            var data = {code: '1', msg: '操作失败'};
            res.render('error', data);
        } else {
            var data = {title: 'ejs', name: '高文雅', data: result[0]};
            res.render(rediret, data);
        }
    },
    queryById: function (req, res) {
        var id = +req.query.id; // 为了拼凑正确的sql语句，这里要转下整数
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