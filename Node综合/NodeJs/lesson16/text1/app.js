/**
 * Created by shi on 2016/12/14.
 */
var express=require("express");
var path=require("path");
var ejs=require("ejs");
var bodyParser=require("body-parser");
var app=express();
//����routes�µ�index.js�ļ� (���Բ�дindex.js Ĭ�Ͼ�����) �����䴫�ݲ���app
//���þ�̬�ļ�����ϵͳ
app.use(express.static(path.join(__dirname,"public")));
//����body-parserģ��
app.use(bodyParser.urlencoded({extended:false}));
//����ģ������Ŀ¼
app.set("html",path.join(__dirname,"html"));
//����ģ����������  ҳ�������ʽΪhtml  �м�������仰û��s �� view
app.set("view engine","html");
//�̶��﷨ ��ס����
app.engine("html",ejs.__express);
//����routes������������� ��Ϊǰ����bodyParser
var routes=require("./routes")(app);

app.listen(8686,function(){
    console.log("listen 8686...");
})