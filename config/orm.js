var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, allBurger) {
        var query = "SELECT * FROM " + table + ";"
        connection.query(query, function (err, res) {
            if (err) throw err;
            allBurger(res);
        })
    },
    addBurger: function (name, burgerAdd) {
        var query = "INSERT INTO burgers (burger_name, devoured) VALUES(?, 0)";
        connection.query(query, function (err, res) {
            if (err) throw err;
            burgerAdd(res);
        });
    },
    updateBurger: function (id, burgerUpdate) {
        var query = "UPDATE burgers SET devoured = 1 WHERE id =?";
        connection.query(query, [id], function (err, res) {
            if (err) throw err;
            burgerUpdate(res);
        });
    }

};

// orm export
module.export = orm;