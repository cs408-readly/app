var User = require('../models/user');
var path = require('path');
module.exports = function(app, passport) {

    app.get('/', isLoggedIn, function(req, res) {
        res.sendFile(path.join(__dirname+'/../public/index.html'));
    });

    app.get('/login', function(req, res) {

        res.sendFile(path.join(__dirname+'/../public/login.html'));
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
                res.redirect('/');
            } 

            else 
            {
                res.redirect('/login');
            }
        });

      });

    app.post('/signup', passport.authenticate('local-signup', {failureRedirect: '/login'}), function(req, res) {
      res.redirect('/');
    });

    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });
};

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}



