const cartModel = require('../Model/cartModel');
let { OK, NotFound, BadRequest } = require('../Middleware/httpStatusCode.json');



class cartService {

    addCartService(data, id) {
        data.userId = id;
        return cartModel.addToCart(data)
            .then((result) => {
                return ({ success: true, message: "Book Added into Cart Successfully", data: result, code: OK });
            }).catch((error) => {
                return ({ success: true, message: "Failed to add in Cart", error: error, code: BadRequest });
            })
    }


    getCartService(id) {
        return cartModel.getCart(id)
            .then((result) => {
                return ({ success: true, message: "These items are in your cart", data: result, code: OK });
            }).catch((error) => {
                return ({ success: false, message: "Something went wrong", error: error, code: BadRequest });
            })
    }

    updateCartService(id, newData) {
        return cartModel.updateCart(id, newData)
            .then((result) => {
                return ({ success: true, message: "Cart Updated Successfully", data: result, code: OK });
            }).catch((error)=>{
                return ({ success: false, message: "Cart not found ", error: error, code: BadRequest });
            })
    }

    // deleteCartService(id){
    //     return cartModel.deleteCart(id)
    //     .then((result)=>{
    //         return ({ success: true, message: "Cart deleted Successfully", data: result, code: OK });
    //     }).catch((error)=>{
    //         return ({ success: false, message: "Cart Updated Successfully", data: result, code: OK });
    //     })
    // }

}

module.exports = new cartService();