/**
 * Created by yunhuan on 2016/12/10.
 */

var express=require("express");
var path=require("path");

var index=require("./routes/index");
var user=require("./routes/user");
//ʵ����express
var app=express();

//������ͼ·����
app.set("html",path.join(__dirname,"html"));
//������ͼ��ģ�����棺ʹ��renderʱ����Ҫ���ã�views�ļ����µ�htmlҳ����Ϊ��ʵ����Ⱦ��
app.set("html engine",'html');
//���ñ�׼·����
app.use(express.static(path.join(__dirname,"public")));


//����·�ɵ����ַ���

//��һ��app.router
/*
app.get("/",index);
app.get("/user",user);
app.listen(8080,function(){
    console.log("listen at port 8080");
});*/

//������express.Router
app.use("/",index.router);
app.use("/user",user);
app.listen(8080,function(){
    console.log("listen at port 8080");
});