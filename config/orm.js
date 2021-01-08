/*
SQL ORM

selectAll

insertOne

updateOne
*/

const connection = require("./connection");

// Promisified connection.query
function query(query, values) {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
}

module.exports = {
    selectAll: function() {

    },
    insertOne: function() {

    },
    updateOne: function() {

    }
};
