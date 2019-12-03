/**
 * Created by yunhuan on 2016/12/15.
 */
module.exports=function(app){
    app.get("/",function(req,res){
        //res.render("index");
        res.redirect("index");//重新定向:/会自动定向到/idnex
    });
    app.post("/index",function(req,res){
        //模板引擎定义变量title
        res.json({
            code:0,
            data:"success"
        });
    });
    app.get("/index",function(req,res){
        //模板引擎定义变量title
        res.render("index",{title:"submit type:json"});
    });
    app.get("/login",function(req,res){
        res.render("login",{title:"submit type:jsonp"});
    });
    app.get("/_login",function(req,res){
        var data={
            name:"jsonp"
        }
        res.json(JSON.stringify(data));
    });
    app.get("/getjson",function(req,res){
        var data={
            name:"aguai",
            love:"zhazha"
        }
        res.json(JSON.stringify(data));
    });
}