var fs = require("fs");
var path=require("path");
var url = "etc";
var filePath = "./etc/my.txt";

//遍历文件的对象字面量
var counterFile=function(url){
    fs.readdir(url,function(err,data){
        if(err) return console.error(err);
        data.forEach(function(file){
            var filepath=path.join(url,file);
            fs.stat(filepath,function(err,stats){
                if(err)return console.error(err);
                if(stats.isFile()){
                    console.log("this is a file");
                }else{
                    console.log("this is not a file");
                }
            })
        })
    })
};
//创建文件的对象自面量
var createFile = function (filePath) {
    fs.writeFile(filePath, "hello world", function (err) {
        if (err)return console.error(err);
        console.log("write done");
        counterFile(url);
    });

};
//读取并copy的对象字面量
var readFile = function (filePath) {
    fs.readFile(filePath, function (err, data) {
        if (err) return console.error(err);
        var newpath = "./etc/new.txt";
        fs.writeFile(newpath, data, function (err) {
            if (err)return console.error(err);
            console.log("copy is already finished!");
        });

    })
};
//判断文件是否存在的对象字面量
var isFile = function (filePath) {
    fs.exists(filePath, function (flag) {
        if (flag) readFile(filePath);counterFile(url);
        createFile(filePath);
    })
};
//创建目录的对象字面量
var createDir = function (url) {
    fs.mkdir(url, function (err) {
        if (err)return console.log(err);
        console.log("create dir is finished");

        isFile(filePath);
    })
};
//判断目录是否存在的对象字面量
var isExist = function (url) {
    fs.exists(url, function (flag) {
        if (flag) {
            isFile(filePath);
        } else {
            createDir(url);
        }

    })
};
isExist(url)