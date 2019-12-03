/**
 * Created by yunhuan on 2016/12/15.
 */
//第七章：一次迭代：静态文件服务合并
/*
var arr=["one.js","two.js"]
var a=arr+"";
console.log(typeof a);*/
//迭代一次：

var fs=require("fs");
var http=require("http");
var path=require("path");
//文件类型：css或js
var MIME={
    ".css":"text/css",
    ".js":"text/javascript"
}
//合并文件的函数
function combineFile(pathname,callback){
    //for循环遍历：闭包异步的
    var output = [];
    (function next(i, len) {
        if (i < len) {//未读取完
            fs.readFile(pathname[i], function (err, data) {
                if (err) {
                    callback(err);
                } else {
                    //把读出来的push到一个数组里，并接着读取下一个
                    output.push(data);
                    next(i + 1, len);
                }
            });
        } else {//读取完成
            //callback(null, Buffer.concat(output));//转变为buffer
            callback(null, output+"");//转变为字符串：end后面输出
        }
    }(0, pathname.length));

}
//主体函数
function main(){
    //console.log(argv)
    //创建服务器
    http.createServer(function(request,response){
        //调用格式化url
        var root="./";//路径的目录
        var url=request.url;
        //console.log(url);//   :/??one.js,two.js
        var urlobj=parseUrl(root,url);//得到parseUrl return出的对象
        //调用合并文件的函数的callback
        combineFile(urlobj.pathnames,function(err,data){
            if(err){
                response.writeHead(404,{
                    "content-type":'text/html'
                });
                response.end(err);
            }else{
                response.writeHead(200,{
                    "content-type":urlobj.mime
                });
                //console.log(response);
                response.end(data);
            }
        });
    }).listen(8000,function(){
        console.log("listen port at 8000");
    });
}
//格式化url：
function parseUrl(root,url){
    //判断如果地址栏url没有??,则加上??
    if(url.indexOf("??")===-1){
        url=url.replace("/","/??");
    }
    //用??分割url
    var arr=url.split("??");
    //console.log(arr);//[ '/', 'one.js,two.js' ]
    var baseroot=arr[0];//路径的根目录
    //用,分割文件名（map是映射，可以操作所有的）
    var pathnames = arr[1].split(',').map(function (value) {
        return path.join(root, baseroot, value);//??
    });
    //console.log(pathnames);//[ 'one.js', 'two.js' ]
    return {
        mime: MIME[path.extname(pathnames[0])] || 'text/plain',
        pathnames: pathnames
    };
}
main();


//一次迭代：
//案例：将两个文件合并输出内容
//浏览器{
    //地址栏：http://localhost:8000/??one.js,two.js
    //输出台network：??one.js,two.js
//}