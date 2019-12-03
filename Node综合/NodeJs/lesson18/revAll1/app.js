/**
 * Created by yunhuan on 2016/12/16.
 */
//·�ɸ�ϰ��
var express=require("express");
var path=require("path");
var bodyParser=require("body-parser");
var ejs=require("ejs");
var cookieParser=require("cookie-parser");
var session=require("express-session");
var flash=require("connect-flash");

var app=express();

app.set("html",path.join(__dirname,"html"));
app.set("view engine","html");
app.engine("html",ejs.__express);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser("error message"));
app.use(session({cookie:{maxAge:60000}}));
app.use(flash());
//ƥ��flash��·��(./flash��дƥ��ȫ�ֵ��м��)
app.use(function(req,res,next){
    res.locals.error=req.flash("error");
    next();
})

var router=require("./routes/index")(app);

app.listen(8080,function(){
    console.log("listen port at 8080");
})