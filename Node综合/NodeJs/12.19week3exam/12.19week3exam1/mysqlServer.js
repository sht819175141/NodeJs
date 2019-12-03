/**
 * Created by yunhuan on 2016/12/19.
 */
//var mysql=require("mysql");
var options={
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"cm1501d"
}
var connection=mysql.createConnection(options);
connection.connect();
connection.query("select * from login",function(err,datas){
    if(err) return console.error(err);
    console.log(datas);
})
connection.end()