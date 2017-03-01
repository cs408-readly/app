var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models/user');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

        // asynchronous
        process.nextTick(function() {
        console.log('test local signup');
        User.findOne({ 'local.email' :  email }, function(err, user) {

            if (err)
                return done(err);

            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                var newUser = new User();

                newUser.local.firstName = req.body.firstName;
                newUser.local.lastName = req.body.lastName;
                newUser.local.email    = req.body.email;
                newUser.local.password = newUser.generateHash(req.body.password);
                newUser.local.savedArticles = null;
                newUser.local.sources = {
                    engadget        : 0,
                    time            : 0,
                    fortune         : 0,
                    bbc_news        : 0,
                    bbc_sport       : 0,
                    ign             : 0,
                    recode          : 0,
                    techcrunch      : 0,
                    techradar       : 0,
                    cnbc            : 0
                };
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });

        });

    }));

    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true 
    },
    function(req, email, password, done) {

        User.findOne({ 'local.email' :  email }, function(err, user) {
            
            if (err)
                return done(err);

            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.'));

            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oh Snap! Wrong password.'));

            return done(null, user);
        });

    }));
}
