var mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "root",
    database: "redkaneCopia"
});

module.exports = connection;