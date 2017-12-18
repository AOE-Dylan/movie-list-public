//dylan
'use strict';

const Pool = require('pg-pool');
const config = require('./config.json');
const {table, host, database, user, password, port} = config;
const Client = new Pool({
 host,
 database,
 user,
 password,
 port,
 idleTimeoutMillis : 1000
});

const testDelete = require('../test_data/delete.json');
const {id} = testDelete;
const row = new Pool({
 id,
});

console.log(row);

let deleteMovie = "DELETE FROM " + table + " WHERE id = '" + row.options.id + "';";

module.exports.delete = (event, context, callback) => {
  Client.connect()
  .then(client => {
    console.log('connected to DB ' + Client.options.database);
    client.release();
    return client.query(deleteMovie);
  })
  .then(what => {
    console.log("deleted row: " + row.options.id)
  })
  const response = {
    statusCode: 200,
    headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Credentials' : true
    },
    body: "Success!",
  };

  callback(null, response);
}
