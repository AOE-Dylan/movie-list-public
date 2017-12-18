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

const testStuff = require('../test_data/post.json');
const {id, title, year, genre} = testStuff;
const insert = new Pool({
 id,
 title,
 year,
 genre
});

console.log(insert);

let addMovie = "INSERT INTO " + table + " VALUES (" + insert.options.id + ", '" + insert.options.title + "', " + insert.options.year + ", '" + insert.options.genre +"');";

module.exports.post = (event, context, callback) => {
  Client.connect()
  .then(client => {
    console.log('connected to DB ' + Client.options.database);
    client.release();
    return client.query(addMovie);
  })
  .then(what => {
    console.log(insert.options)
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
