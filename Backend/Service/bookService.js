const bookModel = require('../Model/bookModel');
let { OK, NotFound, BadRequest } = require('../Middleware/httpStatusCode.json');


class bookService {

    addBookService(data, role) {
        return bookModel.addBook(data)
            .then((result) => {
                return ({ flag: true, message: "Record added Succesfully", data: result, code: OK });
            }).catch((error) => {
                return ({ flag: false, message: "Failed to add Record", error: error, code: BadRequest });
            })
    }
}

module.exports = new bookService();