var User = require('../models/user.js');

var path = require('path');
module.exports = function(app) {

    app.get('/settings', function(req, res, callback){
        User.findOne({_id: req.user._id}, function(err, user) {
            
        });
    });

    app.post('/settings', function(req, res) {
    	console.log('yooo');
        User.findOne({ _id: req.user._id }, function(err, user) {
        	console.log(user._id);
        	console.log(user.firstName);
        	user.local.firstName = req.user.firstName;
        	user.local.lastName  = req.user.lastName;
        	user.local.email = req.user.email;
        	user.local.password = req.user.password;
            user.save();
        });
    });
};