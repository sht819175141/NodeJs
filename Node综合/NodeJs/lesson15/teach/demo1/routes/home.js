/**
 * Created by Nan on 2016/12/12.
 */
module.exports = function (req, res) {
    var userInfomation = {
        name: "yingxiaona",
        age: "18",
        gender: "female",
        hobby: ['coding', 'eating', 'dace', 'sleep'],
        job: '20K'
    };
    res.render('index', {title: 'index page', flag: true, userInfo: userInfomation});
};