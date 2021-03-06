const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    book_ID: {
        type: Schema.Types.ObjectId,
        ref: 'bookDB',
        require: true
    },
    order_ID: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },

}, { timestamps: true })

let orderDetailsModel = mongoose.model('order_details', userSchema)

class orderModel {

    addOrderDetailsModel = (orderDetailsData, callback) => {
        console.log('orderDetailsData : ', orderDetailsData)
        orderDetailsModel.create(orderDetailsData, (err, data) => {
            if (err) {
                console.log('err : ', err)
                console.log('Error failed to store the order details')

            } else if (data) {
                console.log('data : ', data)
                console.log('Successfully stored order details')

            }
        })




        orderDetailsModel.populate(orderDetailsData, { path: "book_ID" }, function(err, result) {
            if (err) {
                console.log('err : ', err)
                console.log('Error failed to store the order details')
                callback(err)
            } else if (result) {
                console.log('result : ', result)
                console.log('Successfully stored order details')
                callback(result)
            }
        })


    }
}

module.exports = new orderModel();