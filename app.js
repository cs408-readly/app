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

var port = (process.env.NODE_ENV === 'test') ? 3001 : (process.env.PORT || 3000);


// remove if not using mysql. If just sql add sql db setup statement
var mysql       = require('mysql');
var Sequelize   = require('sequelize');
var sequelize   = new Sequelize('mysql://sql9156962:7iPcSpiILT@sql9.freemysqlhosting.net:3306/sql9156962');

// only for mongodb 
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); //remove this later. just for login testing purpose

require('./config/passport')(passport);

// Middleware
if (process.env.NODE_ENV != 'test') app.use(morgan('dev'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes

require('./routes/auth.js')(app, passport);
require('./routes/trending.js')(app);

module.exports = app.listen(port);


