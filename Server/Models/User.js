var mongoose = require('mongoose');


var Schema = mongoose.Schema;

//Define collection and schema for users
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