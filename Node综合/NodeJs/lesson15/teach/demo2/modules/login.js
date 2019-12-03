/**
 * Created by Nan on 2016/12/13.
 */
var mysql = require('mysql');
var option = {
    host: '127.0.0.1',
    user: 'root',
    password: '12344321',
    database: 'cmsm_1501d'
};
var pool = mysql.createPool(option);

module.exports = function (username, password,res) {
    var $query = 'select * from login where username=\'' + username + '\' and passwrod=\'' + password + '\'';
    pool.getConnection(function (err, connection) {
        if (err) {
            return console.error(err)
        }
        console.log($query);
        connection.query($query, function (err, result) {
            if (err) return console.error(err);
            if (result.length) {
                var data = {code: '0', data: result[0]};
                res.json(data);
            } else {
                var data = {code: '1', msg: 'error'};
                res.json(data);
            }
            //¶Ï¿ªÁ¬½Ó³Ø
            connection.release();
        });
    });
};