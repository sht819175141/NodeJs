/**
 * Created by yunhuan on 2016/12/9.
 */
//--------domain捕获异常
var domain=require("domain");//引入domain模块
var fs=require("fs");
var oDomain=domain.create();//创建domain实例
function readfiles(path,callback){
    fs.readFile(path,oDomain.bind(function(err,data){
        return callback(err,data);
    }));
};
readfiles("./aa.txt",function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
    error();
});
/*oDomain.on("error",function(err){
    console.log(err);//这里的err为实际捕获到的错误，如果不输出则页面正常进行，输出则手动告诉我们错误，与报错不同
})*/
//通过domain捕获一个异步错误，得到一个对象；否则会抛错error()