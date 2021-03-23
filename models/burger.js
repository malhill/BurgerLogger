const orm = require('.config/orm.js');

const burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    insertOne: (column, value, cb) => {
        orm.insertOne('burgers', column, value, (res) => {
            cb(res);
        });
    },
    updateOne: (id, cb) => {
        orm.updateOne('burgers', 'devoured', true, id, (res) => {
            cb(res);
        })
    },
}

module.exports = burger; 