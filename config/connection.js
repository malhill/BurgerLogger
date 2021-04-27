const mysql = require("mysql");

let connection;
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(proccess.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "password",
    database: "burger_db"
    })
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
  
module.exports = connection;