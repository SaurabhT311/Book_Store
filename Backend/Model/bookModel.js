const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    bookName: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
})

let books = mongoose.model('Books', bookSchema)

class bookModel {

    addBook(data) {
        console.log("data is:", data);
        let bookData = new books(data);
        return bookData.save(data).then((result) => {
            return result;
        }).catch((error) => {
            return error
        })
    }

}

module.exports = new bookModel();