/**
 * Created by yunhuan on 2016/12/20.
 */
//-------------学到的内置模块：{
var fs=require("fs");
var path=require("path");
var http=require("http");
var net=require("net");
var url=require("url");
var querystring=require("querystring");
var util=require("util");
var zlib=require("zlib");
var cluster=require("cluster");
var child_process=require("child_process");
var domain=require("domain");
var os=require("os");
//}

//--------1、进程
//console.log(process)
//console.log('Current uid: ' + process.setgid(13));???

/*
paths:
    [ 'F:\\八维课件\\第十个月Nodejs\\NodeJs\\review_week2\\node_modules',
        'F:\\八维课件\\第十个月Nodejs\\NodeJs\\node_modules',
        'F:\\八维课件\\第十个月Nodejs\\node_modules',
        'F:\\八维课件\\node_modules',
        'F:\\node_modules' ]*/
//paths:表示node_modules路径会默认一级级向上寻找直到找到根目录
//--------2、fs
//fs.stat(path, [callback]):获取文件信息【也分同步异步】
var fs=require("fs");
fs.stat("12_20.js",function(err,data){
    //console.log(data)
});

var info=fs.statSync("12_20.js");
//console.log(info);
//console.log(info.ctime.toLocaleString())//2016-12-20 18:50:52:创建时间
/*
atime: 2016-12-20T08:54:40.238Z,
mtime: 2016-12-20T08:54:40.238Z,
ctime: 2016-12-20T08:54:40.240Z,//创建时间
    birthtime: 2016-12-20T08:54:40.238Z*/
//fs.rename(oldPath, newPath, [callback]):重命名
fs.rename("12_20.js","12_20.js",function(err,data){
    if(err) return console.error(err);

})
//--------6、遍历文件

//--------3、路径:分隔符：'\\' or '/'.（\\为转义）
/*var path=require("path");
var p="12_20.js";
var p2="F:/八维课件/第十个月Nodejs/NodeJs/review_week2/12_20.js";
console.log(path.basename(p))//路径全称：12_20.js
console.log(path.basename(p,".js"))//去掉后缀：12_20
{//F:/八维课件/第十个月Nodejs/NodeJs/review_week2：
    console.log(path.dirname(p2));//获取通过node执行的js文件所在的绝对路径
    console.log(__dirname);//获取通过node执行的js文件所在的绝对路径
    console.log(process.cwd());//表示当前文件的绝对路径
}
console.log(__filename)//F:\八维课件\第十个月Nodejs\NodeJs\review_week2\12_20.js



console.log(path.sep)//:\
console.log('foo/bar/baz'.split(path.sep));//[ 'foo/bar/baz' ]
console.log('foo\\bar\\baz'.split(path.sep));//[ 'foo', 'bar', 'baz' ]*/


//--------4、url

//--------5、domain
/*var domain=require("domain");
var Odomain=domain.create();
function readFile(){
    fs.readFile("./read.txt",function(err,data){
        if(err) return console.log(err);
        console.log(data.toString());
        error();
    })
}
Odomain.run(readFile);
Odomain.on("error",function(err){
    //console.log(err);
})*/




