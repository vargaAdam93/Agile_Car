var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cors = require('cors');
let port = 4200;
mongoose.connect('mongodb://localhost:27017/Agile_db');

var express = require("express");
var app = express();

var carRouter = require('./Routes/carRoutes');
var car_statusRouter = require('./Routes/car_statusRoutes');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/cars', carRouter);
app.use('/car_status', car_statusRouter);
// Start the server
app.listen(port, function(){
    console.log('Server is running on Port: ',port);
});