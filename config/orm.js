const connection = require("./connection.js");

const orm = {};

orm.selectAll = function (callback) {
    var query = "SELECT * FROM burgers;";
    connection.query(query, function (err, result) {
      if (err) throw err;
      console.log(result)
      callback(result);
    });
};


orm.insertOne = function (name, callback) {
    var query = "INSERT INTO burgers (burger_name) values (\"" + name + "\");";
    connection.query(query, function (err, result) {
      if (err) throw err;
      console.log(result);
      callback(result);
    });
};


orm.updateOne = function (id, callback) {
    var query = "UPDATE burgers SET devoured = 1 WHERE id =" + id +  ";";
    connection.query(query, function (err, result) {
        if (err) throw err;
        console.log(result);
        callback(result);
    });
}


// --------------------------------------------------------------------
// Export the orm object for the model (burger.js)
module.exports = orm;
