const orm = require("../config/orm.js");

var burger = {
    selectAll: function (callback) {
        return orm.selectAll(callback);
    },
    insertOne: function (name, callback) {
        orm.insertOne(name, callback);
    },
    updateOne: function (id, callback) {
        orm.updateOne(id, callback);
    }
}

module.exports = burger;
