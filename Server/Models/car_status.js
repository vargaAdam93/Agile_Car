var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Define collection and schema for coordinates
var CarStatus = new Schema({
        car_plate: String,
        fuel: Number,
        total_km: Number,
        error_messages: [{error_message: String}],
        speed: Number,
        throttle: Number,
        using_by: String,
        pos_x: Number,
        pos_y: Number,
        date: {type: Date, default: Date.now}
    },
    {
        collection: 'car_status'
    }
);
module.exports = mongoose.model('Car_status', CarStatus);