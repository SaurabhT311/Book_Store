const orderDetailsModel = require('../model/orderModel')

class order_Details {

    addOrderDetailsServices = (orderDetailsData, callback) => {

        console.log("We are inside the service's add_Order_details_Services function")
        orderDetailsModel.addOrderDetailsModel(orderDetailsData, (data, err) => {
            if (data) {
                console.log('data in the services : ', data)
                callback({ message: 'Order details added successfully', success: true, status: 200, data: data })
            } else if (err) {
                callback({ message: 'Error failed to add order details', success: false, status: 400, err: err })
            }
        })
    }




}

module.exports = new order_Details();