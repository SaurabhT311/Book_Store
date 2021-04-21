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

    getCart() {
        return cart.find({}).populate('userId').populate('bookId')
            .then((result) => {
                console.log("res is:", result);
                return result;
            }).catch((error) => {
                return error;
            })
    }

    updateCart(id, newData) {
        return cart.findByIdAndUpdate(id, newData, { new: true })
            .then((result) => {
                return result;
            }).catch((error) => {
                return error;
            })
    }

    deleteCart(id) {
        return cart.findByIdAndDelete(id)
            .then((result) => {
                return result;
            }).catch((error) => {
                return error;
            })
    }

}

module.exports = new cartModel();




