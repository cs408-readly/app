var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'sql9.freemysqlhosting.net',
  user: 'sql9156962',
  password: '7iPcSpiILT'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})