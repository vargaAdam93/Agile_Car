var express = require('express');
var app = express();
var userRouter = express.Router();

var User = require('../Models/User');

userRouter.route('/login/post').post(
    function (req,res) {
        var email = req.body.email;
        var passwd = req.body.password;
        User.findOne({ email: email, password : passwd},
            function (err,user) {
                if(err) {
                    console.log(err);
                    return res.send(err);
                }
                if(user) {
                    console.log("userroute ok"+user);
                    return res.send(user);
                }
                else
                {
                    console.log("No such user");
                    return res.send("");
                }
            }
        )
    }
);
userRouter.route('/register/post').post(
    function (req,res) {
        var newUser = User();
        newUser.email = req.body.email;
        newUser.name = req.body.name;
        newUser.password = req.body.password;
        newUser.type = req.body.type;
        newUser.licence_number = req.body.licence_number;
        var query = User.where({ email: req.body.licence_number});
        query.findOne(
            function (err, user) {
                if(err) return res.status(404).send("error");
                if(user === null)
                {
                    newUser.save().then( newUser =>{
                        res.json('registered')
                    })
                        .catch( err => {res.status(400).send("Already registered");})
                }
            }
        )
    }
);
userRouter.route('/').get(function (req,res) {
    User.find(function (err, users) {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(users);
        }
    })
});

module.exports = userRouter;