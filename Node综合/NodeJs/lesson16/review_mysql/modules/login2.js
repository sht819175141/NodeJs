/**
 * Created by yunhuan on 2016/12/14.
 */
//-------�������ݿⷨ����



//����mysqlģ��:
var mysql=require("mysql");
//�������ӵ�����
var options=require("../configs/config");
//����һ�����ݿ����ӣ�
var pool=mysql.createPool(options);
//�������ݿ�[[�첽����]]��
var rows;
pool.getConnection(function(err,connection){
    if(err) return console.error(err);
    //ִ�в�ѯ��䣺
    connection.query("select * from login",function(err,rows){
        if(err) return console.error(err);
        if(rows.length>0){
            //console.log(rows[0]);
            rows={
                code:0,
                errmsg:"",
                result:rows[0]
            }
        }else{
            rows={
                code:1,
                errmsg:"error"
            }
        }
        module.exports=rows;
        console.log(rows)
        //�Ͽ����ݿ�����
        connection.release();//????
    });
});
