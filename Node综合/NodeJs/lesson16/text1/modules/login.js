/**
 * Created by shi on 2016/12/14.
 */
//����ļ������þ����������ݿ�
//����mysqlģ��
var mysql=require("mysql");
//���봴�����ӵ�����
var option=require("../configs/sqlconf");
//�������ݿ�����
var connection=mysql.createConnection(option);
//�������ݿ�
connection.connect();
//���ò�ѯ���
var queryString="select * from login";
//ִ�в�ѯ���   resultΪ��ѯ���Ľ��
connection.query(queryString,function(err,result){
    if(err) return console.error(err);
    console.log(result);
})
//�ر����ݿ�
connection.end();


