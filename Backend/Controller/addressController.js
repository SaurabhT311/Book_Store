let addService = require('../Service/addressService');

const response = {};

class addController {

    addressController(req, res, next) {
        try {
            addService.addressService(req.body)
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

    updateAddressController(req, res, next) {
        try {
            let newData = req.body;
            let id = req.params.id;
            addService.updateAddressService(id, newData)
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

    deleteAddressController(req, res, next) {
        let id = req.params.id;
        addService.deleteAddressService(id)
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
    } catch(error) {
        next(error)
    }
}

module.exports = new addController();

