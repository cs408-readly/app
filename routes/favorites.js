var User = require('../models/user.js');
var Article = require('../models/article.js');


module.exports = function(app) {

    app.post('/favorites', function(req, res) {

        User.findOne({ _id: req.user._id }, function(err, user) {
            Article.findOne({ _id: req.body.article_id }, function(err, article) {
                var x = user.local.savedArticles.indexOf(article._id);
                console.log(x);
                if (x == -1) {
                    user.local.savedArticles.push(article) ;
                    user.save();
                }
            });
        });
    });
};