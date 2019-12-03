//2使用child_process.spawn()创建一个网络服务（server.js)的紫禁城；浏览器打开，访问页面;
var child_process=require("child_process");
child_process.spawn("node",["server.js"]);