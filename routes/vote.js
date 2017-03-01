var User = require('../models/user.js');
var Article = require('../models/article.js');


module.exports = function(app) {

    app.post('/upvote', function(req, res) {

        User.findOne({ _id: req.user._id }, function(err, user) {
            user.local.sources[req.body.source] += 1;
            user.save();
        });

        Article.findOne({ _id: req.body.article_id }, function(err, article) {
            article.upvote += 1;
            article.save();
        });

        res.status(200).send();
    });

    app.post('/downvote', function(req, res) {

        User.findOne({ _id: req.user._id }, function(err, user) {
            user.local.sources[req.body.source] -= 1;
            user.save();
        });

        Article.findOne({ _id: req.body.article_id }, function(err, article) {
            article.upvote -= 1;
            article.save();
        });

        res.status(200).send();
    });
};
