const route = require('express').Router();
const userController = require('../Controller/userController');
const bookController = require('../Controller/bookController');
const addController = require('../Controller/addressController');
const cartController = require('../Controller/cartController');
const { register, login, role } = require('../Middleware/validator');
const jwtToken = require('../Middleware/jwtToken');
const { validate } = require('../Middleware/validate');


route.post('/registration', register, validate, userController.userResgistrationController);
route.post('/login', login, validate, userController.userLoginController);


//book routes
route.post('/book', jwtToken.tokenVerification, bookController.addBookController);
route.get('/book/get', jwtToken.tokenVerification, bookController.getBookController);
route.put('/book/:id', jwtToken.tokenVerification, bookController.updateBookController);
route.delete('/book/:id', jwtToken.tokenVerification, bookController.deleteBookController);


//cart routes
route.post('/cart/add', jwtToken.tokenVerification, cartController.addCartController);
route.get('/cart', jwtToken.tokenVerification, cartController.getCartController);
route.put('/cart/:id', jwtToken.tokenVerification, cartController.updateCartController);


//address route
route.post('/add', jwtToken.tokenVerification, addController.addressController);
route.put('/add/:id', jwtToken.tokenVerification, addController.updateAddressController);
route.delete('/add/:id', jwtToken.tokenVerification, addController.deleteAddressController);


module.exports = route;