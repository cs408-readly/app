var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var savedArticleSchema = new Schema ({
	UserId: [
      {type: Schema.Types.ObjectId, ref: 'User'}
    ],
	ArticleId: [
      {type: Schema.Types.ObjectId, ref: 'Articles'}
    ]
});

module.exports = mongoose.model('SavedArticles', savedArticlesSchema);
