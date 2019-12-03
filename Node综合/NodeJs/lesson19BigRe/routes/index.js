/**
 * Created by yunhuan on 2016/12/19.
 */
var login = require("./login");
module.exports = function (app) {
    app.get("/", login);
    //????????userLogin
    app.get("./userLogin", function (req, res) {
        var username = req.body.username;
        var passward = req.body.passward;
        if (username == "huan" && passward == "123") {
            res.jsonp({
                errCode: 0,//???????
                errMg: "",//???????
                isLogin: true,//??????????????????
                isSucess: true//?????????????
            })
        } else {
            res.jsonp({
                errCode: 1,
                errMg: "login failed",
                isLogin: false,
                isSucess: false
            })
        }
    })
    //form??????????????post
}