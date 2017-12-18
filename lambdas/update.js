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

const testUpdate = require('../test_data/update.json');
const {id, title, year, genre} = testUpdate;
const change = new Pool({
 id,
 title,
 year,
 genre
});

console.log(change);

let deleteMovie = "UPDATE " + table + " SET id = " + change.options.id + ", title = '" + change.options.title + "', year = " + change.options.year + ", genre = '" + change.options.genre + "' WHERE id = 4;";

module.exports.update = (event, context, callback) => {
  Client.connect()
  .then(client => {
    console.log('connected to DB ' + Client.options.database);
    client.release();
    return client.query(deleteMovie);
  })
  .then(what => {
    console.log("changes: " + change.options.id + ", " + change.options.title + ", " + change.options.year + ", " + change.options.genre)
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
