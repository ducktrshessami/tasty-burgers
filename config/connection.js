/*
Create a connection to burgers_db
*/

const sql = require("mysql");

var connection = sql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: require("./password"),
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection; // Export for use
