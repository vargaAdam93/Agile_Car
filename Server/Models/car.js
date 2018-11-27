var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Define collection and schema for cars
var Car = new Schema({
        plate_number: String,
        type: String,
    },
    {
        collection: 'cars'
    }
);
module.exports = mongoose.model('Car', Car);