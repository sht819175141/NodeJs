/**
 * Created by Nan on 2016/11/15.
 */
/**
 * Created by Nan on 2016/11/15.
 */
var mysql = require('mysql');
var options = {
    //主机名
    host: 'localhost',
    //用户名
    user: 'root',
    //密码
    password: '12344321',
    //数据库名
    database: 'media'
};

//创建数据库连接
var connection = mysql.createConnection(options);

//连接数据库
connection.connect();

//执行查询语句
connection.query('select * from login where userName="haonan"&&passWord="12344321"', function (err, data) {
    if (err) {
        return console.error(err);
    }
    if (data.length > 0) {
        module.exports.login = function (req, res) {
            res.json(data);
        };
    }
});
//断开数据库连接
connection.end();