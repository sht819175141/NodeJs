/**
 * Created by yunhuan on 2016/12/15.
 */
var express=require("express");
var path=require("path");
var ejs=require("ejs");
var bodyparser=require("body-parser");


var app=express();

app.set("html",path.join(__dirname,"html"));
app.set("view engine","html");
app.engine("html",ejs.__express);
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

var router=require("./routes/index")(app);


app.listen(8080,function(){
    console.log("listen port at 8080");
});