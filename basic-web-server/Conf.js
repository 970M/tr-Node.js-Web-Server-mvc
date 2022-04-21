let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "970M",
    password: "0000",
    database: "covoiturage",
});

connection.connect();

module.exports = connection;
