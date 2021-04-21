const mongoose = require('mongoose');


const addressSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    fullName:{
        type:String,
        required:true
    },

    addressType: {
        type: String,
        enum: ['Home', 'Office'],
        default: 'Home'
    },

    fullAddress: {
        type: String,
        required: true
    },

    pincode:{
        type:Number,
        required:true
    },

    city: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

let address = mongoose.model('Address', addressSchema)

class addModel {

    createAddress(data) {
        let addData = new address(data);
        return addData.save(data).then((result) => {
            return result;
        }).catch((error) => {
            return error;
        })
    }

    getAddress(){
        return address.find({})
        .then((result)=>{
            return result;
        }).catch((error)=>{
            return error;
        })
    }

    updateAddress(id, newData) {
        return address.findByIdAndUpdate(id, newData, { new: true })
        .then((result)=>{
            return result;
        }).catch((error)=>{
            return error;
        })
    }

    deleteAddress(id){
        return address.findByIdAndDelete(id)
        .then((result)=>{
            return result;
        }).catch((error)=>{
            return error;
        })
    }

}

module.exports = new addModel();