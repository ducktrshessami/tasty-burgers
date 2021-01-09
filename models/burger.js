const orm = require("../config/orm");

module.exports = {
    list: function() {
        return orm.selectAll("burgers");
    },
    add: function(burger) {
        return orm.insertOne("burgers", { burger_name: burger });
    },
    devour: function(id) {
        return orm.updateOne("burgers", { devoured: true }, `id = ${id}`);
    }
};
