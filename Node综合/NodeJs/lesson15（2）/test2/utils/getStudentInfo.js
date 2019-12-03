/**
 * Created by Nan on 2016/11/14.
 */
var mysql = require('mysql');
var options = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'media'
};
var arr = [];
var connection = mysql.createConnection(options);

connection.connect();

var sql_query = "select * from tb_classmate where stu_name='高文雅'";

connection.query(sql_query, function (err, data, fields) {
    if (err) throw err;
    if (data) {
        for (var i = 0; i < data.length; i++) {
            //arr[i] = JSON.stringify(data[i]);
            arr[i] = data[i];
        }
    }
    //console.log(arr[0].stu_name);
    module.exports.getStudentInformation = arr;
});

connection.end();

