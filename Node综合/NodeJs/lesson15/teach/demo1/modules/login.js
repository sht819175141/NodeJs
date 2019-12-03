/**
 * Created by Nan on 2016/12/13.
 */
var mql = require('mysql');
var option = {
    host: '127.0.0.1',
    user: 'root',
    password: '12344321',
    database: 'cmsm_1501d'
}


var connection = mql.createConnection(option);

connection.connect();

var queryString = "select * from login where username='haonan'";
connection.query(queryString, function (err, datas) {
    if (err) return console.error(err);
    if (datas.length) {
        module.exports.userlogin = function () {
            return datas[0];
        }
    } else {
        module.exports.userlogin = function () {
            return {
                code: 1,
                errMsg: 'error'
            }
        };
    }
});

connection.end();

