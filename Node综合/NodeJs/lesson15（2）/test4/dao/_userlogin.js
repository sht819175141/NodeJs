/**
 * Created by Nan on 2016/11/16.
 */
var mysql = require('mysql');

var options = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '12344321',
    database: 'media'
};

var connect = mysql.createConnection(options);

connect.connect();
var queryStr = 'select * from login where userName="haonan"&&passWord="12344321"';
connect.query(queryStr, function (err, data) {
    if (err) {
        return console.error(err);
    }
    if (data.length > 0) {
        module.exports.loginState = function () {
            return data[0];
        };
    }
});
connect.end();