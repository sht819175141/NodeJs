/*var express=require("express");
var app=express();
var index=require("./routes/index");
var user=require("./routes/user");
var about=require("./routes/about");
app.use("/",index);
app.use("/user",user);
app.use("/about",about);
app.listen(8080,function(){
    console.log("listen at port 8080");
});*/


var express=require("express");
var app=express();
var routes=require("./routes/index")(app);



app.listen(8080,function(){
    console.log("listen at port 8080");
});



