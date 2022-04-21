let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "phpmyadminGD",
    password: "0000",
    database: "livreor",
});

connection.connect();

module.exports = connection;
