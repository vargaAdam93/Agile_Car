var express = require('express');
var app = express();
var carRouter = express.Router();

var Car = require('../Models/car');

//Post
carRouter.route('/add/post').post(
    function (req, res) {
		var newCar = Car();
		newCar.plate_number = req.body.plate_number;
		newCar.type = req.body.type;
		var query = Car.where({ plate_number: req.body.plate_number});
		query.findOne(
            function (err, car) {
				if(err) return res.status(404).send("error");
                if(car === null)
                {
					newCar.save().then( newCar =>{
                        res.json('Registered new car,')
                    })
                        .catch( err => {res.status(400).send("Car is already registered");})
				}
				else
				{ res.status(400).send("Car is already registered"); }
			}
		)
	}
);

//GET
carRouter.route('/').get(
    function (req, res) {
        Car.find(
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
carRouter.route('/delete/post').post(function (req, res) {

    Car.findByIdAndRemove({_id: req.body.carplate},
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

module.exports = carRouter;