/**
 * Created by yunhuan on 2016/12/10.
 */
//����express���
var express=require("express");
//ʵ����express
var app=express();
//��ӡ hello world����
/*//�ڴ��������ӡ
app.get("/",function(){
    console.log("hello world!");
})
//�������ҳ���ӡ
app.get("/",function(request,respond){
    respond.end("hello world");
});*/



//�������ҳ���ӡ
var index=require("./routes/index");
app.get("/",index);
app.listen(8080,function(){
    console.log("listen at port 8080");
});