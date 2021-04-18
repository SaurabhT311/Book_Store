const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
        required: true
    },

    quantity: {
        type: Number,
        default: 1
    }
},
    {
        timeStamps: true
    })

let cart = mongoose.model('Cart', cartSchema);

class cartModel {

    addToCart(data) {
        let cartData = new cart(data)
        return cartData.save(data)
            .then((result) => {
                return result;
            }).catch((error) => {
                return error;
            })
    }

    getCart(id) {
        return cart.find({ "userId": id }).populate('userId').populate('bookId')
            .then((result) => {
                return result;
            }).catch((error) => {
                return error;
            })
    }

}

module.exports = new cartModel();