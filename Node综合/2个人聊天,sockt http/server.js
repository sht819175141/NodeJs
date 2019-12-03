const http = require("http");
const io = require("socket.io");
const express = require("express");

var app = express();

app.use(express.static("./html"));

var ser = http.createServer(app);

var ios = io.listen(ser);
var user = [];

ios.on("connection",function (socket) {
    //var user = "";

    socket.on("login",function (uname) {
        if (user.indexOf(uname) == -1){
            socket.userindex = user.length;
            socket.names = uname;
            user.push(uname);
            ios.emit("res","欢迎"+uname);
            ios.emit("sys",user.length);
            socket.emit("loginon");

        }else {
            socket.emit("useron","用户名已存在");
        }
    });

    socket.on("filesrc",function (data) {

        var date = new Date();
        var times = date.toLocaleString();
        ios.emit("filesrcRes",socket.names,data,times)

    });

    socket.on("disconnect",function () {

        user.splice(socket.userindex,1);
        socket.broadcast.emit("sys",user.length);

    });

    socket.on("msg",function (data) {
        var date = new Date();
        var times = date.toLocaleString();
        ios.emit("res",socket.names+"("+times+"):"+data);

    })

});

ser.listen(3000,function () {
    console.log("listen 3000");
});



