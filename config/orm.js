const connection = require("./connection.js");

const orm = {};

orm.selectAll = function () {
    var query = "SELECT * FROM burgers_db.burgers;";
    connection.query(query, function (err, result) {
      if (err) throw err;
      return result
    });
})};


orm.insertOne = function (name) {
    var query = "INSERT INTO burgers_db.burgers (burger_name) values (" + name + ");";
    connection.query(query, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
})};


orm.updateOne = function (id) {
    var query = "UPDATE burgers_db.burgers SET devoured = 1 WHERE id =" + id +  ";";
    connection.query(query, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}


// --------------------------------------------------------------------
// Export the orm object for the model (burger.js)
module.exports = orm;
