
var mysql = require('mysql'),
    config = require('../config');

function mysqlcli(database){
    if(!(this instanceof mysqlcli)) {
        return new mysqlcli(database);
    }
    this._conn = mysql.createPool({
        connectionLimit: 10,
        host: config.mysql.li.host,
        user: config.mysql.li.user,
        password: config.mysql.li.password,
        database: database
    });
}

mysqlcli.prototype.db = function(database){
    this._conn = mysql.createPool({
        connectionLimit: 10,
        host: config.mysql.li.host,
        user: config.mysql.li.user,
        password: config.mysql.li.password,
        database: database
    });
    return this;
}

mysqlcli.prototype.query = function(sql, params){
    if (this._conn) {
        return new Promise(function(resolve, reject){
            this._conn.query(sql, params, function(err, results){
                if (err) {
                    return reject && reject(err);
                }
                resolve && resolve(results);
            })
        }.bind(this))
    }
}

mysqlcli.prototype.insert = function(table, values){
    values = values || {};
    return this.query('INSERT INTO ?? SET ?', [table, values]);
}

mysqlcli.prototype.update = function(table, sets, conditions) {
    return this.query('UPDATE ?? SET ? WHERE ?', [table, sets, conditions]);
}

module.exports = mysqlcli;
