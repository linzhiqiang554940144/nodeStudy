var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test1'
});

connection.connect();

connection.query('SELECT * FROM user', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});

// 修改
let upSql = 'UPDATE user SET name=?,uid=?WHERE id =?'
let upParams = ['芮b', '3', '3']
connection.query(upSql, upParams, (err, res) => {
    if (err) {
        throw err
    } else {
        console.log(res)
    }
})
connection.end();