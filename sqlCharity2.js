var mysql = require('mysql2');
var database = "charity"
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootmysql",
    database: "charity"
});

function pr(msg) {
    process.stdout.write(msg + '\n');
}

pr(`Connected to ${database} database!`);

con.connect(function (err) {
    if (err) throw err;
});

function selectQry(sql) {
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

//let result2;
//var resultSet = [];
var resultSet2; // = [];
var values = [];
//const dataObject = {};
function selectQry2(sql) {
    let rPic;
    con.query(sql, function (err, results) {
        if (err) {
            throw err;
        }
        else {
            results.forEach((row) => {
                // Assuming the table has a column named 'id'
                dataObject[row.Item_Posted_Id] = row;
            }
            )
            endCon(); 
            console.log('Data Object 2 : ', dataObject);
        }
    });
   
}

const prt = (resultSet) => {
    console.log("Printing retrieved records :");
    console.log(resultset);
}

function endCon() {
    con.end((error) => {
        if (error) {
            console.error('Error closing MySQL connection:', error);
            return;
        }
        pr('Connection closed.');
    });
}

let sqlStr = "SELECT * FROM user";
//selectQry(sqlStr);
//sqlStr = "INSERT INTO USER_TYPE VALUES (7, 'Web Designer')";
//selectQry(sqlStr);

sqlStr = 'SELECT * from item_posted';
//JSON_ARRAYAGG(JSON_OBJECT(
const dataObject = {};
selectQry2(sqlStr);
console.log('Data Object:', dataObject);
//var resSet = [];
//resSet = selectQry2(sqlStr, resSet);
//console.log(resSet);    

// endCon();



