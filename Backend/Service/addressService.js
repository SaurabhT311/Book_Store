const addModel=require('../Model/addressModel');

let { OK, NotFound, BadRequest } = require('../Middleware/httpStatusCode.json');

class addService{

    addressService(data){
        return addModel.createAddress(data)
        .then((result)=>{
            return ({ flag: true, message: "Record added Succesfully", data: result, code: OK });
        }).catch((error)=>{
            return ({ flag: false, message: "Failed to add record", error: error, code: BadRequest });
        })
    }


}

module.exports=new addService();