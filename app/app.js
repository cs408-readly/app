var express             = require('express')
var app                 = express()
var passport            = require('passport');
var FacebookStrategy    = require('passport-facebook').Strategy;
var bcrypt              = require('bcrypt-nodejs');
var bodyParser          = require("body-parser");
var morgan              = require('morgan');
var flash               = require('connect-flash');
var cookieParser        = require('cookie-parser');
var session             = require('express-session');
var request             = require('request');


// remove if not using mysql. If just sql add sql db setup statement
var mysql       = require('mysql');
var Sequelize   = require('sequelize');
var sequelize   = new Sequelize('mysql://sql9156962:7iPcSpiILT@sql9.freemysqlhosting.net:3306/sql9156962');

// only for mongodb 
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
app.set('view engine', 'ejs'); //remove this later. just for login testing purpose

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.use(express.static('public'));

app.use(session({ secret: 'secret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


require('./routes/routes.js')(app, passport);

app.listen(3000, function () {
    console.log('app listening on port 3000!');
})

app.get('/trending', function(req, res) {

    request.get('https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=e30f46dbdaa645558d009af5b0ede4ca', function(err, response, body) {
        res.send(body).status(200);
    });

});

