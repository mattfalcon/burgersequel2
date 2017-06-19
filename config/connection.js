// Set up MySQL connection.
var mysql = require("mysql");
var connection; 
// = mysql.createConnection({

//   host: 'us-cdbr-iron-east-03.cleardb.net',
//   user: 'b4b01c8243424c',
//   password: '25e2b918',
//   database: 'heroku_a21fea84d64bc4a'
// });

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});
};

// Make connection.
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
