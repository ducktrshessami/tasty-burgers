/*
Create a connection to burgers_db
*/

const sql = require("mysql");

const connectionInfo = process.env.JAWSDB_URL || {
    host: "localhost",
    port: 3306,
    user: "root",
    password: require("./password"),
    database: "burgers_db"
};

var connection = sql.createConnection(connectionInfo);
connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection; // Export for use
