/**
 * Created by yunhuan on 2016/12/19.
 */
var config = require("./configs/config");
var express = require("express");
var ejs = require("ejs");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var flash = require("connect-flash");
var app = express();

app.set("html", path.join(__dirname, "html"));
app.set("view engine", "html");
app.engine("html", ejs.__express);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("error message"));
app.use(session({ cookie: { maxAge: 6000 } }));
app.use(flash());
app.use(function (req, res, next) {
    res.locals.error = req.flash("error");
    next();
})


var router = require("./routes")(app);
app.listen(config.port, function () {
    console.log("listen port at 7080");

})