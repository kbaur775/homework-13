const orm = require("../config/orm.js");

var burger = {
    selectAll: function () {
        return orm.selectAll();
    },
    insertOne: function (name) {
        orm.insertOne(name);
    },
    updateOne: function (id) {
        orm.updateOne(id);
    }
}

module.exports = burger;
