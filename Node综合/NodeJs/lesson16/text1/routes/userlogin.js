/**
 * Created by shi on 2016/12/14.
 */
//˼·��
// 1.�������ݿ�
// 2.����·�� �������ݿ��׳��ķ����ж��Ƿ������ݿ�����ƥ�� ·���׳�json������ҳ����ʾ

var userlogin=require("../modules/pool_login");
var express=require("express");
var router=express.Router();

router.post("/userlogin",function(req,res){
    //�����ȡ��username��password��Ҫ����modules���pool_login.js ȥƴ�Ӳ�ѯ�����
    var username=req.body.username;
    var password=req.body.password;
    var rows;
    userlogin.login(username,password,function(err,result){
        if(err) return console.error(err);
        if(result.length){  //������  ƥ��ɹ�
            //��ʵ�ʹ���������Ӧ�÷���һ��json����
            //��ά��ѧ�򵥻�ֻ����һ������
            //console.log(result[0]);
            rows={
                code:0,  //�ɹ�
               // errMsg:"", //û�д���
                result:result[0]  //���Ϊƥ�䵽������
            }
        }else{ //û������ ��û��ƥ��Ľ��
            rows={
                code:1, //ʧ��
                errMsg:"error"  //�д���
            }
        }

        //console.log(rows);
        res.json(rows);
    })
})
module.exports=router;