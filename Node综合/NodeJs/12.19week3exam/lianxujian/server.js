/**
 * Created by Administrator on 2016/12/19.
 */
const http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
    res.end('I am child one');
}).listen(3000,function(){
    console.log('listen 3000...')
})