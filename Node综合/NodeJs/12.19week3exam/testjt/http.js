/**
 * Created by Ò»±­µ­Ë® on 2016/12/19.
 */
    module.exports=function(){
        var http = require("http");
        http.createServer(function (req, res) {
            res.end("http server");
        }).listen(8080, function () {
            console.log("listen 8080....");
        });
    }
