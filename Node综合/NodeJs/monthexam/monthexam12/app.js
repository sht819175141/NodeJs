/**
 * Created by yunhuan on 2016/12/22.
 */
var server1=require("./modules/server1");
var server2=require("./modules/server2");






//案例：【不使用express框架】
//1.实现一个node server 端口号为8080 该server返回一个带有css样式和js脚本的html
//2.实现一个node server 端口号为8081 该server返回一段json数据
//思路：
//1.使用nodejs启动http服务器
//2.要求该服务器能正确解析css和js文件
//3.在一个html里面引入js和css文件
//4.将html内容响应给http服务器
//5.将所有内容和所有请求都能正常显示和处理
//6.将8081的端口返回一段json 数据
//7.使用8080端口的服务器发送一个ajax请求，请求地址为8081的端口地址