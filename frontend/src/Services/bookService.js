import Axios from "./axiosServices";

const axios = new Axios();
const token = localStorage.getItem("token")
const baseUrl = "http://localhost:4000";

export default class services {

    getbook = () => {

        return axios.Get(`${baseUrl}/getallbook`, {
            headers: {
                token: token
            }
        })
    }

    addToCart = (data) => {
        console.log("data is", data)
        return axios.Post(`${baseUrl}/add_to_cart/${data}`, data, {
            headers: {
                token: token
            }
        })
    }

    getCartBook = () => {
        return axios.Get(`${baseUrl}/getCartitem`, {
            headers: {
                token: token
            }
        })

    }
    removeCartItem = (id) => {
        console.log("bookId ::", id)
        return axios.Del(`${baseUrl}/deletecartItem/${id}`, {
            headers: {
                token: token
            }
        })
    }
    updateCartItem = (data, id) => {
        return axios.Put(`${baseUrl}/updateCartItem/${id}`, data, {
            headers: {
                token: token
            }
        })

    }

    customerDetails = (data) => {
        return axios.Post(`${baseUrl}/CustomerDetails`, data, {
            headers: {
                token: token
            }
        })
    }

    placeOrder = (data) => {
        return axios.Post(`${baseUrl}/add/order_details`, data, {
            headers: {
                token: token
            }
        })
    }

}