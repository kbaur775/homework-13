const mysql = require("mysql");

const connection = mysql.createConnection({host: "localhost", port: 3306, user: "root", database: "burgers_db"});
connection.connect();

module.exports = connection;
