/**
 * Created by yunhuan on 2016/12/18.
 */
var mysql=require("mysql");
var option={
    http:"127.0.0.1",
    user:"root",
    password:"root",
    database:"cm1501d"

}

module.exports=function(username,password,res,req){
    var connection=mysql.createConnection(option);
    connection.connect();
    connection.query('select * from login where name=\''+username+'\' and password=\''+password+'\'',function(err,data){
        if(err) return console.error(err);
        //console.log(data[0])
        if(data.length){
             res.json({
             code:0,
             errM:"",
             data:data[0]
            })
        }else{
            req.flash('error', '你输入错了，请重新输入!');
            res.redirect("/login")
         }
    })
    connection.end();
}







