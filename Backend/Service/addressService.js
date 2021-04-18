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

    updateAddressService(id,newData){
       return addModel.updateAddress(id,newData)
       .then((result)=>{
        return ({ flag: true, message: "Address updated Succesfully", data: result, code: OK });
       }).catch((error)=>{
        return ({ flag: false, message: "Address Not found ", error: error, code: BadRequest });
       })
    }

    deleteAddressService(id){
        return addModel.deleteAddress(id)
        .then((result)=>{
            return ({ flag: true, message: "Address deleted Succesfully", data: result, code: OK });
        }).catch((error)=>{
            return ({ flag: false, message: "Address not found", error: error, code: BadRequest });
        })
    }


}

module.exports=new addService();