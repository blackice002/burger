// Set up mysql connection
var mysql = require("mysql")

// coonnection setup for mysql
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: burgers_db
});

connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack)
        return;
    }
    console.log("connected as id " + connection.threadId)
});

// connection module export

module.exports = connection;