const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");
const querystring = require("querystring");

/*创建*/
var server = http.createServer(function (req, res) {
    /*  路径console.log(req.url)  */
    var pathname = url.parse(req.url, true).pathname;/*true 转换为对象*/
    var query = url.parse(req.url, true).query;
    console.log(query)
    if (pathname == "/chan") {
        /*  主要执行get提交  */
        res.writeHead(200, {"Content-type": "text/html;charset='utf-8'"});
        res.write("第" + query.num + "页")
    } else if (pathname == "/forms") {
        /*  主要执行post提交  */
        var str = ""
        req.on("data", function (chunk) {
            str += chunk
        })
        req.on("end", function () {
            /*console.log(str)*/
            var sum = querystring.parse(str)
            res.writeHead(200, {"Content-type": "text/html;charset='utf-8'"});
            res.write("您的账号是" + sum.user + ",您的邮箱是" + sum.email)
        })

    } else {
        /*  判断，默认刷新为a页面  */
        if (req.url == "/") {
            pathname = "./html/a.html"
        } else {
            /*  对应页面  */
            pathname = path.join("./html", req.url)
        }
        /*  获取扩展名  */
        var name = path.extname(pathname)
        /*console.log(name)*/
        /*  利用json文件判断扩展名  */
        var main;
        var one = JSON.parse(fs.readFileSync("./mime.json"))
        /*for(i in one){
            if(name==i){*/
        main = one[name]
        /*	}
        }*/
        /*console.log(main)*/
        fs.readFile(pathname, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                /*  首先要有状态码200  */
                res.writeHead(200, {"Content-type": main});
                res.write(data)
            }
        })
    }


})
/*function getmine(name){
	switch(name){
		case "html":
			return "text/html;charset='utf-8'";break;
		case "jpg":
			return "image/jpg";break;
		case "png":
			return "image/png";break;
	}
}*/
server.listen(1000)
console.log("listen 1000...")
