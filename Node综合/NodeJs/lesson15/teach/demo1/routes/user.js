/**
 * Created by Nan on 2016/12/12.
 */
//����һ��
//�׳�һ����������expressʵ������Ķ���appȥƥ��
//module.exports = function (req, res) {
//    res.send('user page')
//};
//����һ��
//�׳�һ����������expressʵ������Ķ���appȥƥ�� һ�� express.Router()
var express = require('express');
var router = express.Router();


router.get('/user', function (req, res) {
    //res.send('user page')
    res.render('user');
});

module.exports = router;