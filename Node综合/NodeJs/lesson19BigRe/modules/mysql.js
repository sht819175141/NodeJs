/**
 * Created by yunhuan on 2016/12/20.
 */
var mysql=require("mysql");
var config = require("../configs/config");

var connection = mysql.createConnection(config.options);
connection.connect();
connection.query("",function(err,datas){

})
connection.end();