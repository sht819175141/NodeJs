/**
 * Created by Ò»±­µ­Ë® on 2016/12/19.
 */
var mysql = require("mysql");
var options = {
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"cm_1501d"
};
module.exports = function(callback){
    var connection = mysql.createConnection(options);
    connection.connect();
    connection.query("select * from user",function(err,data){
        callback(err,data)
    });
    connection.end();
};
