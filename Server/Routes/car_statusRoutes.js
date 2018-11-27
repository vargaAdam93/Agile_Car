var express = require('express');
var app = express();
var car_statusRouter = express.Router();

var Car_status = require('../Models/car_status');
var Car = require('../Models/car');

//Post
car_statusRouter.route('/add/post').post(
    function (req, res) {
		var newCarStatus = Car_status();
		newCarStatus.car_plate = req.car_plate;
        newCarStatus.fuel = req.fuel;
        newCarStatus.total_km = req.total_km;
        newCarStatus.error_messages = req.error_messages;
        newCarStatus.speed = req.number;
        newCarStatus.throttle = req.throttle;
        newCarStatus.using_by = req.using_by;
        newCarStatus.pos_x = req.pos_x;
        newCarStatus.pos_y = req.pos_y;
		newCarStatus.date = req.date;
		var query = Car.where({ plate_number: req.body.car_plate});
		query.findOne(
            function (err, car) {
				if(err) return res.status(404).send("error");
                if(car !== null)
                {
					newCarStatus.save().then( newCarStatus =>{
                        res.json('Registered new car status.')
                    })
                        .catch( err => {res.status(400).send("Car is not in the system.");})
				}
				else
				{ res.status(400).send("Car is not in the system."); }
			}
		)
	}
);

//GET
car_statusRouter.route('/').get(
    function (req, res) {
        Car_status.find(
            function (err, cars) {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.json(cars);
                }
            }
        );
    }
);

//DELETE
car_statusRouter.route('/delete/post').post(function (req, res) {

    Car_status.findByIdAndRemove({_id: req.body.carplate},
        function (err, car) {
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json('Removed');
            }
        });}

);

module.exports = car_statusRouter;