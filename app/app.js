var express = require('express')
var app = express()
var Sequelize = require('sequelize');
var mysql = require('mysql')


app.use(express.static('public'));

var sequelize = new Sequelize('mysql://sql9156962:7iPcSpiILT@sql9.freemysqlhosting.net:3306/sql9156962');

sequelize.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
  }).catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
