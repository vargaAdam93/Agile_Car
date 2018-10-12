var express = require('express');
var app = express();
var carRouter = express.Router();

var Car = require('../Models/car');

//Post
carRouter.route('/add/post').post(
    function (req, res) {
        console.log(req.body);
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