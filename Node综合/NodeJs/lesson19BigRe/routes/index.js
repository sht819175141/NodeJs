/**
 * Created by yunhuan on 2016/12/19.
 */
var login=require("./login");
module.exports=function(app){
    app.get("/",login);
    //����Ľӿڣ�userLogin
    app.get("./userLogin",function(req,res){
        var username=req.body.username;
        var passward=req.body.passward;
        if(username=="huan" && passward=="123"){
            res.jsonp({
                errCode:0,//�������
                errMg:"",//������Ϣ
                isLogin:true,//�Ƿ��¼�ɹ���������ɹ�
                isSucess:true//�Ƿ����ӵ����ݿ�
            })
        }else{
            res.jsonp({
                errCode:1,
                errMg:"login failed",
                isLogin:false,
                isSucess:false
            })
        }
    })
    //form��Ĭ�ϵ��ύ��ʽΪpost
}