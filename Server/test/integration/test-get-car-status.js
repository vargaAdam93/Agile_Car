var supertest = require('supertest');
const app = require('../../server');

var car = {
	plate_number : 'ABC_123',
	type : 'test'
};

var carStatus = {
	car_plate: 'ABC_123',
    fuel: 500,
    total_km: 500,
    error_messages: [],
    speed: 20,
    throttle: 20,
    using_by: 'test',
    pos_x: 0,
    pos_y: 0
};

exports.car_can_be_added = function(done){
	supertest(app)
	.post('/cars/add/post')
	.send(car)
	.expect(successfullyCreatedOrAlreadyRegistered)
	.end(done);
};

exports.car_status_can_be_added = function(done){
	supertest(app)
	.post('/car_status/add/post')
	.send(carStatus)
	.expect(200)
	.end(done);
};

function successfullyCreatedOrAlreadyRegistered(res){
	if(res.status != 200 && res.status != 400) throw new Error("Creation was not successfull and car is not already registered.");
}