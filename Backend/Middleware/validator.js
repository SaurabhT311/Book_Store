const { buildCheckFunction, body, params } = require('express-validator');
const check = buildCheckFunction(["headers", "params"]);


module.exports = {

    register: [
        body('fullName')
            .trim()
            .isString()
            .notEmpty().withMessage('fullName is Required')
            .isAlpha().withMessage('fullName must be only in alphabets!')
            .isLength({ min: 2 }).withMessage('fullName requires more than 2 characters!'),

        body('email')
            .trim()
            .isEmail().withMessage('Please enter valid email')
            .notEmpty().withMessage('email is required'),

            
        body("mobile")
            .trim()
            .notEmpty().withMessage("Mobile Number is Required!")
            .isLength({ min: 10 }).withMessage("MobileNumber atleast contains  10 digit!"),
            

        body('password')
            .trim()
            .notEmpty().withMessage('password is required')
            .isLength({ min: 5 }).withMessage('password should contain 5 characters'),

    ],

    login: [
        body('email')
            .trim()
            .isEmail().withMessage('Please enter valid email')
            .notEmpty().withMessage('email is required'),

        body('password')
            .trim()
            .notEmpty().withMessage('password is required')
            .isLength({ min: 5 }).withMessage('password should contain 5 characters')
    ]

}