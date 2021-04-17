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

    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
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

    getAllBooks() {
        return books.find({})
            .then((result) => {
                console.log("res is:", result);
                return result;
            }).catch((error) => {
                return error;
            })
    }

    updateBook(id, newData) {
        console.log("book updates", id, newData);
        return books.findByIdAndUpdate(id, newData, { new: true })
            .then((result) => {
                console.log("res:", result);
                return result;
            }).catch((error) => {
                return error;
            })
    }

    deleteBook(id){
        return books.findByIdAndDelete(id)
        .then((result)=>{
            return result;
        }).catch((error)=>{
            return error;
        })
    }

}

module.exports = new bookModel();