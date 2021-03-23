//referencing MVC A:13
var connection = require("./connection.js");

const allInOne = {
    selectAll: (tableName, cb) => {
        const stringQuery = 'SELECT * FROM ' + tableName + ";";
        connection.query(stringQuery, (err, result) => {
        if (err) throw (err);
        });
    },
    insertOne: (tableName, column, value, cb) => {
        const stringQuery = `INSERT INTO ${tableName} (${column}, devoured) VALUES ("${value}", 0);`;
        connection.query(stringQuery, (err, result) => {
        if (err) throw err;
        cb(result)
        });
    },
    updateOne: (tableName, column, condition, value, cb) => {
        const stringQuery = `UPDATE ${tableName} SET ${column}=${condition} WHERE id=${value};`;
        connection.query(stringQuery, (err, result) => {
        if (err) throw err;
        cb(result);
        })
    },
};

module.exports = allInOne;