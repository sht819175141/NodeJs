/**
 * Created by yunhuan on 2016/12/21.
 */
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
app.engine("html",ejs__express);
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser("error message"));
app.use(session({cookie:{maxAge:6000}}));
app.flash(flash());


