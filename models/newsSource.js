var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NewsSourceSchema = new Schema ({
    name    : String,
    count   : Number
});
module.exports = mongoose.model('NewsSource', NewsSourceSchema);