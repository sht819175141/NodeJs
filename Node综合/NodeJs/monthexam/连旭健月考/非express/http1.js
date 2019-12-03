/**
 * Created by Administrator on 2016/12/2 0002.
 */
var http=require("http"),
    path=require("path"),
    fs=require("fs"),
    url=require("url");
var server=http.createServer(function(req,res){
        var pathname;
        if(req.url=="/"){
            pathname="./public/index.html";
        }else{
            pathname=path.join("./public",req.url);
        }
        var extname=path.extname(pathname);
        fs.readFile(pathname,function(err,data){
            if(err){
                console.log(err)
            }else{
                var mine=getMine(extname);
                res.writeHead(200,{"Content-type":mine});
                res.write(data);
                res.end();
            }

        })
});
server.listen(8080,function(){
    console.log("listen 8080...");
});

//设置类型
function getMine(name){
    switch (name){
        case".html":
            return 'text/html;charset:utf-8';
            break;
        case ".css":
            return 'css/stylesheet;charset:utf-8';
            break;
        case '.js':
            return 'text/javascript;charset:utf-8';
    }
}