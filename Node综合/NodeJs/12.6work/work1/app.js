

var fs=require("fs");
var child_process=require("child_process");
var util=require("util");
var dirname="source";//文件夹
var targetpath="source_copy";
var cmd=util.format("xcopy",dirname,targetpath);
//判断文件存在状态的对象字面量
var direxistState=function(targetpath){
    //判断文件夹是否存在
    fs.exists(targetpath, function (flag) {
        if (!flag) {
            //如果文件夹不存在的话，创建文件夹,再复制
            makedir(targetpath);
            child_process.exec(cmd);
        }else{
            //如果存在的话，直接复制
            child_process.exec(cmd);
        }
    });
}
function makedir(targetpath){
    fs.mkdir(targetpath,function(err){
        if(err) return console.error(err);
        console.log("make dir finished");
    })
}
direxistState(targetpath);