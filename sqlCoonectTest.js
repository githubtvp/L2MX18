https://www.w3schools.com/nodejs/nodejs_mysql_limit.asp
https://www.w3schools.com/nodejs/nodejs_mysql.asp

/**
 * in the MySql root connection the following coomand
 * neccessary to connect to mysql
 * else permission denied
 * --- " alter user 'root'@'localhost' identified with 
mysql_native_password by 'rootmysql';  " ---
 * 
 */
var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootmysql"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE mydb", function (err, result) {
            if (err) throw err;
            console.log("Database created");
        });
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});

/*  The Result Object
When executing a query, a result object is returned.
The result object contains information about 
how the query affected the table.
The result object returned from the example 
above looks like this:
 */ {
    fieldCount: 0,
        affectedRows: 14,
            insertId: 0,
                serverStatus: 2,
                    warningCount: 0,
                        message: '\'Records:14  Duplicated: 0  Warnings: 0',
                            protocol41: true,
                                changedRows: 0
}

con.connect(function (err) {
    if (err) throw err;
    var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
/**
 * The Result Object
As you can see from the result of the example above, 
the result object is an array containing each row as an object.
To return e.g. the address of the third record, 
just refer to the third array object's address property:
 */
console.log(result[2].address);

/**
 * The Fields Object
The third parameter of the callback function is an array 
containing information about each field in the result.
 */
con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
    });
});
/**Which will give you this result: */
/**
 * [
  {
    catalog: 'def',
    db: 'mydb',
    table: 'customers',
    orgTable: 'customers',
    name: 'name',
    orgName: 'name',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 0,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true
  },
  {
    catalog: 'def',
    db: 'mydb',
    table: 'customers',
    orgTable: 'customers',
    name: 'address',
    orgName: 'address',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 0,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true
  }
]
 */
/**
 * As you can see from the result of the example above, 
 * the fields * object is an array containing information 
 * about each field as an object. To return e.g. the name
 *  of the second field, just refer to
 the second array item's name property:
 */
console.log(fields[1].name);
/**
 * Which will produce this result:
    address
 */

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
/**
 * Escaping Query Values
When query values are variables provided by the user, 
you should escape the values.
This is to prevent SQL injections, 
which is a common web hacking technique 
to destroy or misuse your database.
The MySQL module has methods to escape query values:
 */
/**
 * Escape query values by using the mysql.escape() method:
 */
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});

/**
 * You can also use a ? as a placeholder for the values you want to escape.
In this case, the variable is sent as the second parameter in the query() method:
 */
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], function (err, result) {
    if (err) throw err;
    console.log(result);
});
/**
 * If you have multiple placeholders, the array contains multiple values, in that order:
 */
var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});


con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});

/**
 * Drop Only if Exist
If the the table you want to delete is already deleted, 
or for any other reason does not exist, you can use 
the IF EXISTS keyword to avoid getting an error.
 */
con.connect(function (err) {
    if (err) throw err;
    var sql = "DROP TABLE IF EXISTS customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});


// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'your_host',
    user: 'your_user',
    password: 'your_password',
    database: 'your_database'
});

// Connect to the MySQL server
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
        return;
    }
});

// Close the MySQL connection
connection.end((error) => {
    if (error) {
        console.error('Error closing MySQL connection:', error);
        return;
    }
    console.log('MySQL connection closed.');
});

/*
// Import the mysql2 module
const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_mysql_database',
});

// Connect to the database
connection.connect();

// Perform a query to retrieve data
const sqlQuery = 'SELECT * FROM your_table_name';

connection.query(sqlQuery, (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    connection.end(); // Close the connection in case of an error
    return;
  }

  // Process the results and store in a JavaScript object
  const dataObject = {};
  results.forEach((row) => {
    // Assuming the table has a column named 'id'
    dataObject[row.id] = row;
  });

  // Print or use the dataObject as needed
  console.log('Data Object:', dataObject);

  // Close the connection
  connection.end();
});

*/
