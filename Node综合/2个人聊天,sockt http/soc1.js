const socket = require("socket.io");
const fs = require("fs");
const http = require("http");

var server = http.createServer(function (req,res) {
    //console.log(req.url);
    fs.readFile("."+req.url,function (err,data) {

        res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});
        res.write(data);

    })

}).listen(3000);

socket.listen(server).on("connection",function (socket) {

    socket.emit("abc","hello im ser");

    socket.on("cba",function (data) {
        console.log(data);
    })

});
