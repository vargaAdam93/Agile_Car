var express = require('express');
var app = express();
var car_statusRouter = express.Router();

var Car_status = required('../Model/car_status');

//Post
car_statusRouter.route('/add/post').post(
    function (req, res) {
        console.log(req.body);
    }
);

//GET
car_statusRouter.route('/').get(
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