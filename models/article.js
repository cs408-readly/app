var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema({
    Upvote:     Number,
    Downvote:   Number,
    Title:      String,
    Description:String,
    Url:        String,
    source:     String
});
module.exports = mongoose.model('Article', articleSchema);
