const mongoose = require('mongoose');
const bcryptPassword = require('../Middleware/bcrypt');
const jwtToken = require('../Middleware/jwtToken');
const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    mobile:{
        type: Number,
        required:true,
        unique:true
    },

    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User',
    },

    password: {
        type: String,
        required: true
    },
},{
    timestamps:true
})


let users = mongoose.model('User', userSchema);


class userModel {

    userDataObject = (result) => {
        return {
            "_id": result._id,
            "firstName": result.firstName,
            "lastName": result.lastName,
            "email": result.email,
            "mobile":result.mobile,
            "role":result.role
        }
    }

    userRegistration = (req, callback) => {
        users.find({ "email": req.email }, (err, data) => {
            if (err) {
                callback(err);
            } else if (data.length > 0) {
                callback(data);
            } else {
                users.create(req, (err, data) => {
                    if (err) {
                        return callback(err);
                    } else {
                        return callback(null, data)
                    }
                })
            }
        })
    }

    userLogin = (req, callback) => {
        users.find({ "email": req.email }, (err, data) => {
            if (err) {
                callback(err);
            } else if (data.lenth === 0) {
                callback(data);
            } else {
                bcryptPassword.comparePassword(req.password, data[0].password).then( result => {
                    if (result) {
                        console.log("res is:",result);
                        let token = jwtToken.tokenGeneration(this.userDataObject(data[0]));
                        let userData = {
                            "_id": data[0]._id,
                            "role":data[0].role,
                            "firstName": data[0].firstName,
                            "lastName": data[0].lastName,
                            "email": data[0].email,
                            "token": token
                        }
                        callback(null, userData);
                    } else {
                        callback(null, result);
                    }
                })               
            }
        })
    }
}

module.exports = new userModel();