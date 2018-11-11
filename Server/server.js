var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cors = require('cors');
let port = 4200;
mongoose.connect('mongodb://localhost:27017/Agile_db');

var express = require("express");
var app = express();
var expressLogging = require('express-logging');
var logger = require('logops');
var carRouter = require('./Routes/carRoutes');
var car_statusRouter = require('./Routes/car_statusRoutes');
var userRouter = require('./Routes/userRoutes');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(expressLogging(logger));

app.use('/cars', carRouter);
app.use('/car_status', car_statusRouter);
app.use('/users', userRouter);

// Start the server
app.listen(port, function(){
    console.log('Server is running on Port: ',port);
});

module.exports = app;
