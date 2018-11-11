var supertest = require('supertest');
const app = require('../../server');

var userReg = {
	email : 'test@test.com',
	name : 'test',
	password: 'test',
	type: 0,
	licenseNumber: 0
};

var userLogin = {
	name : 'test',
	password: 'test'
};

exports.register_should_be_successful = function(done){
	supertest(app)
	.post('/users/register/post')
	.send(userReg)
	.expect(200)
	.end(done);
};

exports.login_should_be_successful = function(done){
	supertest(app)
	.post('/users/login/post')
	.send(userLogin)
	.expect(200)
	.end(done);
};