const route=require('express').Router();
const userController=require('../Controller/userController');
const bookController=require('../Controller/bookController');
const {register,login}=require('../Middleware/validator');
const jwtToken=require('../Middleware/jwtToken');
const {validate}=require('../Middleware/validate');


route.post('/registration', register, validate, userController.userResgistrationController);
route.post('/login', login, validate, userController.userLoginController);

//book routes
route.post('/book', jwtToken.tokenVerification, bookController.addBookController);


module.exports=route;