/**
 * Created by Nan on 2016/11/15.
 */
/**
 * Created by Nan on 2016/11/15.
 */
var mysql = require('mysql');
var options = {
    //������
    host: 'localhost',
    //�û���
    user: 'root',
    //����
    password: '12344321',
    //���ݿ���
    database: 'media'
};

//�������ݿ�����
var connection = mysql.createConnection(options);

//�������ݿ�
connection.connect();

//ִ�в�ѯ���
connection.query('select * from login where userName="haonan"&&passWord="12344321"', function (err, data) {
    if (err) {
        return console.error(err);
    }
    if (data.length > 0) {
        module.exports.login = function (req, res) {
            res.json(data);
        };
    }
});
//�Ͽ����ݿ�����
connection.end();