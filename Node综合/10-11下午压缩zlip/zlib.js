var zlib = require('zlib')
var http = require('http')
var fs = require('fs')


var server = http.createServer(function(req,res){
    // var zlibFile = zlib.createGzip()//创建一个transform流


    // var rs = fs.createReadStream('./index.html')
    // var targetHtml = fs.createWriteStream('./base.html');
    // // res.end('hello world')
    // // fs.readFile('./index.html',function(err,data){
    // //     console.log(data.toString())
    // // })
    // console.log(zlibFile)
    // var post = '';
    // req.on('data',function(chunk){
    //     post += chunk;
    // })
    // req.on('end',function(){
    //     rs.pipe(zlibFile).pipe(targetHtml)
    // })
// 第二个

    var zlibFile = zlib.createGzip()//创建一个transform流
    var rs = fs.createReadStream('./base.html');
    rs.pipe(zlibFile).pipe(res)



}).listen(8081)


