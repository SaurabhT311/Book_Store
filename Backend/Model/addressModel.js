const mongoose=require('mongoose');


const addressSchema=new mongoose.Schema({

    addressType:{
        type:String,
        enum:['Home','Office', 'Others'],
        default:'Home'
    },

    fullAddress:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    state:{
        type:String,
        required:true
    }
},
    {
        timestamps:true
})

let address=mongoose.model('Address', addressSchema)

class addModel{

    createAddress(data){
        let addData=new address(data);
        return addData.save(data).then((result)=>{
            return result;
        }).catch((error)=>{
            return error;
        })
    }

}

module.exports=new addModel();