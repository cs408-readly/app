var User = require('../models/user');
module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        res.render('index.ejs'); // Replace it with the riot index file
    });

    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') }); //Replace it with riot login page
    });

    app.post('/login', passport.authenticate('local-login', {
        failureRedirect: '/login',
        failureFlash: true}), function(req, res) {
      console.log(req.body.email);

      User.findOne({ 'local.email' :  req.body.email }, function(err, user) {
            if (err) 
            {
                return done(err);
            }

            if (user) 
            {
                console.log(user.local.email);
                res.redirect('/home');
            } 

            else 
            {
                res.redirect('/login');
            }
        });

      });

    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    app.post('/signup', passport.authenticate('local-signup', {failureRedirect: '/signup'}), function(req, res) {
      console.log(req.body.email);
      res.redirect('/home');
    });

    app.get('/home', isLoggedIn, function(req, res) {
       res.render('home.ejs', {
           user : req.user
       });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}



