//4、http模块：创建服务、url操作、querystring操作
var http=require("http");
var url=require("url");
var querystring=require("querystring");

http.createServer(function(request,response){
    response.end("child process");
    //url操作
    var urlp=request.url
    console.log(url.parse(urlp).query);
    var str=url.parse(urlp).query
    console.log(querystring.parse(str+"=123" ));
}).listen(8090,function(){
    console.log("listen port at 8090");
})
//地址栏：         http://localhost:8090/?name=%22haha%22&num=%22en%22
//request.url:   /?name=%22haha%22&num=%22en%22
//url.parse(urlp):
                    /*Url {
                        protocol: null,
                            slashes: null,
                            auth: null,
                            host: null,
                            port: null,
                            hostname: null,
                            hash: null,
                            search: '?name=%22haha%22&num=%22en%22',
                            query: 'name=%22haha%22&num=%22en%22',
                            pathname: '/',
                            path: '/?name=%22haha%22&num=%22en%22',
                            href: '/?name=%22haha%22&num=%22en%22' }*/
//url.parse(urlp).query: 'name=%22haha%22&num=%22en%22'