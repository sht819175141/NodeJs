const express=require("express");
var router=express.Router();

//路由中也是用get
router.get("/user/:id",function(req,res,next){
	if(req.params.id == 0){
		console.log("11");
		next("route")
	}else{
		next()
	}
},function(req,res){
	res.send("index====page");
});

router.get("/user/:id",function(req,res){
	res.send("list=========");
})


/*router.get("/index",function(req,res){
	res.send("index===page");
})
router.get("/list",function(req,res){
	res.send("list======page");
})*/

module.exports=router;