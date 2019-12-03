/**
 * Created by Ò»±­µ­Ë® on 2016/12/19.
 */
var mysql = require("./mysql");
var cluster = require("cluster");
var child_process = require("child_process");
var count=0;
var ser=require('./http.js');
if (cluster.isMaster) {
    var worker = cluster.fork();
    cluster.on("exit",function(){
        cluster.fork();
        count++
    })
} else if (cluster.isWorker) {
    ser();
    mysql(function(err,data){
        if(err)return console.error(err);
        console.log(data[0])
    })
}