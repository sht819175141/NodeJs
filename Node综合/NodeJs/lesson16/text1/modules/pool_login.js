/**
 * Created by shi on 2016/12/14.
 */
//����ļ������þ����������ݿ�
//����mysqlģ��
var mysql=require("mysql");
//���봴�����ӵ�����
var option=require("../configs/sqlconf");
//�������ӳ�
var pool=mysql.createPool(option);

//�������ݿ�
pool.getConnection(function(err,connection){
   if(err) return console.error(err);
    //�׳�һ��������Ҫ���ڴ��� ����userlogin.js���username password
    module.exports.login=function(username,password,callback){
        //���ò�ѯ���
        var queryString='select * from login where username=\''+username+'\'and password=\''+password+'\'';
        //ִ�в�ѯ���
        connection.query(queryString,function(err,result){  //rows������

            callback(err,result);
            //�׳�json���� Ŀ������·�ɽ�����
            //������ģ��֮�䴫������ ֻ������ֵ�Ǵ�����ȥ��
            //module.exports=rows;

            //Ӧ�ø��������Ը�ֵ ����һ��С���� ������� ֪���ſ���
           // module.exports.result=rows;
            //console.log(rows);
        })

    }

})