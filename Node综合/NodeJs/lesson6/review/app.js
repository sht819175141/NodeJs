//1、读写文件：
var fs=require("fs");
//---小文件
/*fs.readFile("./readme.txt",function(err,data){
    if(err)  return console.error(err);
    //console.log(data);
    //console.log(data.toString());
    console.log("read finished"+data);
    fs.writeFile("./readme_copy.txt",data,encoding="utf8",function(err){
        console.log("write done");

    })
})*/
//---大文件
/*var sourcefile="./readme.txt";
var targetfile="./readme_copy.txt";
var opts={encoding:"utf8"};
var readStream=fs.createReadStream(sourcefile,opts);
var writeStream=fs.createWriteStream(targetfile,opts);
readStream.pipe(writeStream);//？？？*/

//2、读写目录
//fs.mkdir(path, [mode], [callback])创建一个文件夹（目录）
/*
fs.mkdir("etc",function(err){
    //判断文件夹是否存在
    fs.exists("etc",function(flag){
        if(flag) return console.log("this dir has already existed"+err)
        console.log("make dir finished")
    })

})*/
var pathname="etc";
function direxistState(pathname){
    //判断文件夹是否存在
    fs.exists(pathname,function(flag){
        if(flag) return console.log("this dir has already existed");

        //如果不存在的话，创建文件夹
        makedir();
    })
}
function makedir(pathname){
    fs.mkdir(pathname,function(err){
        if(err) return console.error(err);
        console.log("make dir finished");

    })
}
direxistState(pathname)
