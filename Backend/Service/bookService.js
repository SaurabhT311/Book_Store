const bookModel = require('../Model/bookModel');
let { OK, NotFound, BadRequest } = require('../Middleware/httpStatusCode.json');


class bookService {

    addBookService(data) {
        return bookModel.addBook(data)
            .then((result) => {
                return ({ flag: true, message: "Record added Succesfully", data: result, code: OK });
            }).catch((error) => {
                return ({ flag: false, message: "Failed to add Record", error: error, code: BadRequest });
            })
    }

    getBookService() {
        return bookModel.getAllBooks()
            .then((result) => {
                console.log("result is:", result);
                return ({ flag: true, message: "These books are available currently", data: result, code: OK });
            }).catch((error) => {
                return ({ flag: false, message: "No Books available", error: error, code: BadRequest });
            })
    }

    updateBookService(id,newData){
        return bookModel.updateBook(id,newData)
        .then((result)=>{
            console.log("result is:",result);
            return ({ flag: true, message: "Book updated succesfully", data: result, code: OK })
        }).catch((error)=>{
            return ({ flag: false, message: "Book is not updated", error: error, code: NotFound })
        })
    }


    deleteBookService(id){
        return bookModel.deleteBook(id)
        .then((result)=>{
            return ({ flag: true, message: "Book record deleted succesfully", data: result, code: OK });
        }).catch((error)=>{
            return ({ flag: false, message: "Record not found", error: error, code: NotFound });
        })
    }

}

module.exports = new bookService();