//----�������ö���http
var http=require("http");
//console.log(http);
//----����http����
//ͨ�������������������ص������д���������һ����������request����һ��������Ӧ ��response��
//д��һ��
/*var server=http.createServer(function(req,res){
   console.log("hello aguai!") ;
})
//�����˿�
server.listen(8080,function(){
    console.log(" listen port 8080!") ;
})*/
/*
//д������
http.createServer(function(req,res){
    console.log("hello aguai!");
}).listen(8080,function(){
    console.log(" listen port at 8080!") ;
})*/

http.createServer(function(request,response){
    //console.log("hello word!")//����������
    //response.write("hello !");
    //response.end("world!");//�������ҳ�������
    //response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    //console.log(request.headers);
    //request.on("data",fucntion(){})
    //request.on("end",fucntion(){})
    var json={
        name:"aguai",
        sex:"Ů"
    }
    response.end(JSON.stringify(json));
}).listen(8080,function(){
    console.log("listen port at 8080");
})



