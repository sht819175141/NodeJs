/**
 * Created by shi on 2016/12/14.
 */
//����·���ļ���������ļ�  ��������·���ļ�
//����homeģ��
var home=require("./home");
var userlogin=require("./userlogin");
//�׳�һ������ ����app.js �������Ĳ���app
module.exports=function(app){
    app.get("/",home);
    app.post("/userlogin",userlogin);
}

