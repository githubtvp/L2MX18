var mysql = require('mysql');
var database = "charity"
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootmysql",
    database: "charity"
});

console.log(`Connected to ${database} database!`);

con.connect(function (err) {
    if (err) throw err;
});

var sql = "SELECT * FROM user";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});

con.end((error) => {
    if (error) {
        console.error('Error closing MySQL connection:', error);
        return;
    }
    console.log('MySQL connection closed.');
});
