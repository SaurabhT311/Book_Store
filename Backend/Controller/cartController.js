const cartService = require('../Service/cartService');

const response = {};

class cartController {

    addCartController(req, res, next) {
        try {
            let id = req.decoded._id;
            console.log("data is:", req.body, id);
            cartService.addCartService(req.body, id)
                .then((result) => {
                    console.log("body is:", result);
                    response.success = true;
                    response.message = result.message;
                    response.data = result.data;
                    res.status(result.code).send(response);
                    return response;
                }).catch((error) => {
                    response.success = false;
                    response.message = error.message;
                    res.status(error.code).send(response)
                })
        } catch (error) {
            next(error)
        }
    }

    getCartController(req, res, next) {
        try {
            let id = req.decoded._id;
            console.log("id is:", id);
            cartService.getCartService(id)
                .then((result) => {
                    console.log("body is:", result);
                    response.success = true;
                    response.message = result.message;
                    response.data = result.data;
                    res.status(result.code).send(response);
                    return response;
                }).catch((error) => {
                    response.success = false;
                    response.message = error.message;
                    res.status(error.code).send(response)
                })
        } catch (error) {
            next(error)
        }
    }

}

module.exports = new cartController();