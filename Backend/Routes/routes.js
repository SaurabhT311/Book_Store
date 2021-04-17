const route = require('express').Router();
const userController = require('../Controller/userController');
const bookController = require('../Controller/bookController');
const { register, login, role } = require('../Middleware/validator');
const jwtToken = require('../Middleware/jwtToken');
const { validate } = require('../Middleware/validate');
const { updateBookController } = require('../Controller/bookController');


route.post('/registration', register, validate, userController.userResgistrationController);
route.post('/login', login, validate, userController.userLoginController);

//book routes
route.post('/book', jwtToken.tokenVerification, bookController.addBookController);
route.get('/book/get',jwtToken.tokenVerification,bookController.getBookController);
route.put('/book/:id',jwtToken.tokenVerification,bookController.updateBookController);
module.exports = route;