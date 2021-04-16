const userModel = require('../Model/UserModel');
let bcryptPassword = require('../Middleware/bcrypt');
let { OK, Conflict, BadRequest, NotFound, Unauthorized } = require('../Middleware/httpStatusCode.json');
class userService {

    userRegistrationService = (req, callback) => {
        req.password = bcryptPassword.securedPassword(req.password);
        return userModel.userRegistration(req, (error, data = null) => {
            if (error) {
                if (error.length > 0) {
                    return callback({ flag: false, message: "Email id exist!", code: Conflict });
                }
                return callback({ flag: false, message: "Registration Failed!", error: error, code: BadRequest });
            } else {
                return callback({ flag: true, message: "Registration Succesfull!", data: data, code: OK });
            }
        })
    }


    userLoginService = (req, callback) => {
        return userModel.userLogin(req, (error, data = null) => {
            if (error) {
                if (error.length === 0) {
                    return callback({ flag: false, message: "Email does not exists!", code: NotFound });
                }
                return callback({ flag: false, message: "Login Failed !", error: error, code: BadRequest });
            }
            else {
                if (data) {
                    console.log("req is:", req);
                    return callback(null, { flag: true, message: "Login sucessfull !", data: data, code: OK });
                }
                else {
                    console.log(req);
                    return callback({ flag: false, message: "password does not matched !", code: Unauthorized });
                }
            }
        })
    }
}

module.exports = new userService();