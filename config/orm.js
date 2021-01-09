/*
SQL ORM

selectAll
get all data from a table

insertOne
insert values into a table

updateOne
update a table with a new value given a condition
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
    selectAll: function(table) {
        return query(`select * from ${table}`);
    },
    insertOne: function(table, data) {
        return query(`insert into ${table} (${Object.keys(data).join(',')}) values (?)`, Object.values(data));
    },
    updateOne: function(table, data, condition) {
        
    }
};
