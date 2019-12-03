/**
 * Created by yunhuan on 2016/12/14.
 */
var express=require("express");
var ejs=require("ejs");
var path=require("path");

var app=express();

// view engine setup
app.set('html', path.join(__dirname, 'html'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);
app.use(express.static(path.join(__dirname, 'public')));

var router=require("./routes/index")(app);

app.listen(8090,function(){
    console.log("listen port at 8090");
})