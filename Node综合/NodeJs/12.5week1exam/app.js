//思路：
//实现文件拷贝效果（包括大文件和小文件）
//1.遍历文件读取下面的所有文件
//2、创建新的文件夹：并判断存在状态
//3、.用stats.size方法判断文件大小{
    //如果文件大于1mb则使用数据流读取
    //如果文件小于1mb则使用fs.readfile读取
//}
//4.判断读取的文件是什么后缀名，并输出后缀名
//5.将读取的文件拷贝输出到另一个文件夹

//1、载入内置模块等
var fs=require("fs");
var path=require("path");

var newdir="./copydemo";
var bPath="./demo/big.mp4";
var sPath="./demo/small.txt";

//2、遍历读取文件夹下的文件的字面量
var url="./demo";
var readDirall=function(url){
    fs.readdir(url,function(err,data){
        if(err) return console.error(err);
        //遍历所有文件
        data.forEach(function(file){
            //console.log(file)
            //得到文件的后缀名
            var end=path.extname(file);
            var filepath=path.join(url,file);
            //console.log(filepath);
            fs.stat(filepath,function(err,stats){
                if(err)return console.error(err);
                //console.log(stats.size)//得到文件具体的大小：以字节为单位
                //判断文件大小
                if(stats.size/1024/1024>1){
                    readBfilr(bPath,end)
                }else{
                    readSfilr(sPath,end);
                }
            })
        })
    })
}
readDirall(url);
//3、创建一个文件夹
/*function makedir(newdir){
    fs.mkdir(newdir,function(err){
        if(err) return console.error(err);
        console.log("make dir finished");
    })
}
makedir(newdir)*/

function direxistState(newdir){
    //判断文件夹是否存在
    fs.exists(newdir, function (flag) {
        if (flag) return console.log("this dir has already existed");
        //如果不存在的话，创建文件夹
        makedir(newdir);
    })
}
function makedir(newdir){
    fs.mkdir(newdir,function(err){
        if(err) return console.error(err);
        console.log("make dir finished");
    })
}
direxistState(newdir);
//4、读取文件并拷贝到另一个文件夹中
    //读取大文件并拷贝
function readBfilr(bPath,end){

    var readStream=fs.createReadStream(bPath);
    var writeStream=fs.createWriteStream("./copydemo/newBig.mp4");
    readStream.pipe(writeStream)
    console.log("read big file and copy big file finished,file type is"+end);
}
    //读取小文件并拷贝
function readSfilr(sPath,end){
    fs.readFile(sPath,function(err,data){
        if(err) return console.error(err);
        console.log("read small file finished and file type is"+end);
        //拷贝小文件
        var data=data.toString();
        writeSfilr(data);
    })
}
function writeSfilr(data){
    fs.writeFile("./copydemo/newSmall.txt",data,encoding="utf-8",function(err){
        if(err) return console.error(err);
        console.log("copy small file finished");
    })
}