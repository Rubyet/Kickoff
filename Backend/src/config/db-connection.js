// db.js
const mysql = require('mysql');
const config = require('./db-config');

// Create a pool to manage connections
const pool = mysql.createPool(config);

// Function to execute SQL queries
function query(sql, args) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query(sql, args, (err, result) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  });
}

module.exports = { query };
