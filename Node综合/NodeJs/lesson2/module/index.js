/*//模块初始化：
var student = require("./stu")
var teacher = require("./teach")
student();
teacher();*/
//模块初始化
var student = require('./stu');
var teacher = require('./teach');
//调用模块
student.callStudent();
teacher.callTeach();