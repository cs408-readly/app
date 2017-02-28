var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var userSchema = new Schema({

    local            : {
        firstName    : String,
        lastName     : String,
        email        : String,
        password     : String,
        savedArticles: [{ "type": Schema.Types.ObjectId, "ref": "Article"}],
        sources      : {
            engadget        : Number,
            time            : Number,
            fortune         : Number,
            bbc_news        : Number,
            bbc_sport       : Number,
            ign             : Number,
            recode          : Number,
            techcrunch      : Number,
            techradar       : Number,
            cnbc            : Number
        }
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
module.exports = mongoose.model('User', userSchema);
