/**
 * Created by yunhuan on 2016/12/15.
 */
//二次迭代：

var fs=require("fs");
var http=require("http");
var path=require("path");
//文件类型：css或js
var MIME={
    ".css":"text/css",
    ".js":"text/javascript"
}
//判断是否是文件的的函数(fs.stat得到文件的信息)
function validateFile(pathname,callback){
    (function next(i, len) {
        if (i < len) {//未读取完
            fs.stat(pathname[i], function (err, stats) {
                //报错：err或者判断出来不是文件的时候
                if (err) {
                    callback(err);
                }else if(!stats.isFile()){
                    callback(new Error("is not a file!"));
                //否则接着读取下一个
                }else{
                    next(i + 1, len);
                }
            });
        } else {//读取完成
            callback(null,pathname);
        }
    }(0, pathname.length));

}
//主体函数
function main(){
    //创建服务器
    http.createServer(function(request,response){
        //接收格式化url函数 得到return出的对象
        var urlobj=parseUrl("./",request.url);
        //接收是否是文件的的函数返回的callback：并将response传给outputFile
        validateFile(urlobj.pathnames,function(err,data){
            if(err){
                response.writeHead(404,{
                    "content-type":'text/html'
                });
                response.end(err);
            }else{
                response.writeHead(200,{
                    "content-type":urlobj.mime
                });
                //response.end(data);
                //不是直接作出响应：一边读取，一边给出响应
                outputFiles(pathnames, response);
            }
        });
    }).listen(8000,function(){
        console.log("listen at 8000");
    });
}
main();
//格式化url：
function parseUrl(root,url){
    if(url.indexOf("??")===-1){
        url=url.replace("/","/??");
    }
    //用??分割url
    var arr=url.split("??");
    //console.log(arr);//[ '/', 'one.js,two.js' ]
    var baseroot=arr[0];//路径的根目录
    var pathnames = arr[1].split(',').map(function (value) {
        return path.join(root, baseroot, value);//??
    });
    //console.log(pathnames);//[ 'one.js', 'two.js' ]
    return {
        mime: MIME[path.extname(pathnames[0])] || 'text/plain',
        pathnames: pathnames
    };
}
//读取并给出响应的函数
function outputFiles(pathnames, response){
    (function next(i, len) {
        if (i < len) {//未读取完
            var readstream=fs.sreateReadStream(pathnames);
            readstream.pipe(response,{end:false});//end判断读取状态，false为未完，则继续向下执行
            readstream.on('end', function() {//监听结束事件
                next(i + 1, len);
            });
        } else {//读写完成
            response.end();
        }
    }(0, pathname.length));
}


//二次迭代：
//案例：将两个文件合并输出内容
//浏览器{
    //地址栏：http://localhost:8000/??one.js,two.js
    //输出台network：??one.js,two.js
//}
