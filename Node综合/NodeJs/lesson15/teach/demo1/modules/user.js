/**
 * Created by Nan on 2016/12/13.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '12344321',
    database: 'cmsm_1501d'
});

connection.connect();

connection.query('select * from user', function (err, datas, fields) {
    if (err) throw err;

    console.log('The solution is: ', datas);
});

connection.end();