/**
 * Created by yunhuan on 2016/12/14.
 */
//-------�������ݿⷨһ��



//����mysqlģ��:
var mysql=require("mysql");
//�������ӵ�����
var options=require("../configs/config");
//����һ�����ݿ����ӣ�
var connection=mysql.createConnection(options);
//�������ݿ�[ͬ������]
connection.connect();
//ִ�в�ѯ��䣺
connection.query("select * from login",function(err,data){
    if(err) return console.error(err);
    console.log(data[0]);//�õ���������
});
//�Ͽ����ݿ�����
connection.end();
