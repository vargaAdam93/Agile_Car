var mongoose = require('mongoose');


var Schema = mongoose.Schema;

//Define collection and schema for coordinates
var User = new Schema({
        name: String,
        email: String,
        password: String,
        licence_number: String,
        type: Number
    },
    {
        collection: 'Users'
    }
);
module.exports = mongoose.model('Users', User);