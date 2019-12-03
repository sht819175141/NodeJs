/**
 * Created by Administrator on 2016/12/22.
 */
var http=require("http");

var server=http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-type':'text/html;charset:utf8',
        'Access-Control-Allow-Origin':'http://localhost:8080'
    })
    var data={
        name:'lsllsls',
        age:23
    }
    console.log(req.url)
    var path=req.url.split("callback=")[1];//截取callback后的参数
    var newpath=path.split("&")[0];
    res.end(newpath+"("+JSON.stringify(data)+")");  //将数据以jsonp的方式返回

}).listen(8081,function(){
    console.log("listen 8081......")
})