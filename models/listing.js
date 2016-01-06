var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ListingSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Listing', ListingSchema);