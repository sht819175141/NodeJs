/**
 * Created by Nan on 2016/11/14.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'media'
});

connection.connect();
connection.query('select * from tb_classmate', function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
});

connection.end();