/**
 * Created by yunhuan on 2016/12/8.
 */
//domain：捕捉异步回调中出现的异常

//-------引入：
//引入domain模块
var domain=require("domain");
/*//创建domain实例
var oDomain=domain.create();

//异步异常：
function async(){
    setTimeout(function(){
        throw new Error("async error");
    });
}
//运行这个一步方法：相当于try
oDomain.run(async);
//通过domain.on("error",callback)监听所捕获的异步异常：相当于catch
oDomain.on("error",function(err){
    console.log(err);
});*/


//-------使用一个domain：

//法一：domain.run()：不可传参数
//domain.run(fn):使用domain的最常用方式,(函数名）
var d = domain.create();
var fs = require("fs");
function readSomeFile(){
    fs.readFile("./aa.txt", function(err,data){
        if(err) return console.error(err);
        console.log(data.toString());
        //抛错：error();
    });
}
d.run(readSomeFile);
d.on("error",function(err){
    console.log(err);
});

//法二：domain.bind(cb)：通过bind方法return一个回调函数（try过程）：这样就可以传递参数了
// 通过error捕捉异常（catch过程)

var d = domain.create();
var fs = require("fs");

function readSomeFile(filename, callback) {
    fs.readFile(filename, d.bind(function(er, data) {
        // if this throws, it will also be passed to the domain
        return callback(er, data);
    }));
    /*上分析：调用readSomeFile的一个回调函数，把callback就传给了readSomeFile，
     readSomeFile又将这个方法返回了，即：
     fs.readFile(filename, function(err,data){
     if(err) return console.error(err);
     console.log(data.toString());
     });*/
}
//传递实参,运行
readSomeFile("./aa.txt",function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
    a()
})
//通过domain.on("error",callback)监听所捕获的异步异常
d.on('error', function(er) {
    //console.log(er);
    //通过域捕获一个错误：{ ReferenceError: a is not defined……}，否则报错 a()
});
