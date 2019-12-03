/**
 * Created by Administrator on 2016/12/19.
 */
//const mysql=require('mysql');
var connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'cm1501d'
})
connection.connect();
connection.query('select * from login',function(err,datas){
    if(err) return console.error(err);
    console.log(datas);
})
connection.end();