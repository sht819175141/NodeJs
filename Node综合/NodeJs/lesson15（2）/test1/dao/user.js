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
var arrData;
//创建数据库连接
var connection = mysql.createConnection(options);

//连接数据库
connection.connect();

//执行查询语句
connection.query('select * from user where stu_name="高文雅"', function (err, data) {
    if (err) {
        return console.error(err);
    }
    arrData = data;
    module.exports.user = function (req, res) {
        console.log(arrData);
        res.render('index.html', {title: 'ejs', name: '高文雅', users: arrData});
    };
    //module.exports.user = arrData;
});
//断开数据库连接
connection.end();
