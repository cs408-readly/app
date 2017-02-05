var express = require('express')
var app = express()


app.use(express.static('public'));

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'sql9.freemysqlhosting.net',
  user: 'sql9156962',
  password: '7iPcSpiILT'
})

var Sequelize = require('sequelize');
var sequelize = new Sequelize('sql9.freemysqlhosting.net', 'sql9156962', '7iPcSpiILT');

connection.connect()

// connection sql queries are suppose to be written here (if needed). Example of writing a query:
/*connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})*/

connection.end()


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
