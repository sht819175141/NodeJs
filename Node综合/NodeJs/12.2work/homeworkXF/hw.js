var fs = require("fs");
var path=require("path");
var url = "etc";
var filePath = "./etc/my.txt";

//�����ļ��Ķ���������
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
//�����ļ��Ķ���������
var createFile = function (filePath) {
    fs.writeFile(filePath, "hello world", function (err) {
        if (err)return console.error(err);
        console.log("write done");
        counterFile(url);
    });

};
//��ȡ��copy�Ķ���������
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
//�ж��ļ��Ƿ���ڵĶ���������
var isFile = function (filePath) {
    fs.exists(filePath, function (flag) {
        if (flag) readFile(filePath);counterFile(url);
        createFile(filePath);
    })
};
//����Ŀ¼�Ķ���������
var createDir = function (url) {
    fs.mkdir(url, function (err) {
        if (err)return console.log(err);
        console.log("create dir is finished");

        isFile(filePath);
    })
};
//�ж�Ŀ¼�Ƿ���ڵĶ���������
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