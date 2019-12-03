var fs=require("fs");
var dirname="etc";//文件夹

var sourcepath="./a.txt";//原来存在的文件
var targetpath="./etc/a_copy.txt";//新创建的文件
function direxistState(dirname,targetpath){
    //判断文件夹是否存在
    fs.exists(dirname,function(flag){
        if(flag) return console.log("this dir has already existed");
        //如果不存在的话，创建文件夹
        makedir(dirname);
    })
    //判断文件是否存在
    fs.exists(targetpath,function(flag){
        if(flag) return console.log("this file has already existed");
        //如果不存在的话，创建文件
        read_creat(sourcepath)
    })
}
function makedir(dirname){
    fs.mkdir(dirname,function(err){
        if(err) return console.error(err);
        console.log("make dir finished");
    })
}
    //先读出原来的，再拷贝一份新的
    function read_creat(filepath){
        fs.readFile(filepath,function(err,data){
            if(err) return console.error(err);
            console.log("read is finished");
            var data=data.toString()
            //读完，开始写
            write(targetpath,data)
        })
    }
    function write(filepath,data){
        fs.writeFile(filepath,data,encoding="utf-8",function(err){
            console.log("write done");
        })
    }
direxistState(dirname,targetpath);
