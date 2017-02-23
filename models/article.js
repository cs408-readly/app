var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema({
    Upvote:     Number,
    Downvote:   Number,
    Save:       Boolean,
    Favorite:   Boolean
});
module.exports = mongoose.model('Article', articleSchema);