var mysql = require('mysql');
var level = require('level')
var db = level(__dirname + '/db');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "a",
    database: "Telstra"
  });
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = con;
