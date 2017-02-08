var express = require('express')
var app = express()
var Sequelize = require('sequelize');
var mysql = require('mysql');
var request = require('request');


app.use(express.static('public'));

var sequelize = new Sequelize('mysql://sql9156962:7iPcSpiILT@sql9.freemysqlhosting.net:3306/sql9156962');

sequelize.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
}).catch(function (err) {
    console.log('Unable to connect to the database:', err);
});

app.get('/trending', function(req, res) {

    request.get('https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=e30f46dbdaa645558d009af5b0ede4ca', function(err, response, body) {
        res.send(body).status(200);
    });

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
