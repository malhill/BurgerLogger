const mysql = require("mysql");

let connection; 

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
  
module.exports = connection;