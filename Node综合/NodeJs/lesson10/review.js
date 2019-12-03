//复习：
//内置模块：
var http=require("http");
var path=require("path");
var net=require("net");
var fs=require("fs");
var url=require("url");
var util=require("util");
var zlib=require("zlib");
var child_process=require("child_process");



//process 全局对象：

//1、标准输入输出
/*process.stdout.write("121\n");
process.stderr.write("err\n");
process.stdin.on("data",function(data){
    console.log("stdin data is "+data);
    //process.kill():杀死一个进程，同时报错：无效的pid
    //process.exit():结束所有进程
})*/
//2、退出进程
    //1）事件发射器:监听输入状态的end事件
/*process.stdin.on("data",function(data){
    console.log(data.toString());
    process.stdin.emit("end")
})
process.stdin.on("end",function(){
    console.log("stdin emit end")
})*/
    //2)exit()：监听exit事件
process.stdin.on("data",function(data){
    console.log("stdin data is "+data);
    process.exit();
})
process.on("exit",function(code){
    //console.log(code)
    console.log("process is exit "+code);
})
