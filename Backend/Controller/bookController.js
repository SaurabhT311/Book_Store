const bookService=require('../Service/bookService');
let { OK,BadRequest } = require('../Middleware/httpStatusCode.json');
const response={};


class bookController{

    addBookController(req,res,next){
        try{
            let role=req.decoded.role;
            console.log("role is:",role);
            if(role === "Admin"){
                bookService.addBookService(req.body,role)
                .then((result)=>{
                    console.log("body is:",result);
                    response.success=true;
                    response.message=result.message;
                    response.data=result.data;
                    res.status(result.code).send(response);
                    return response;
                }).catch((error)=>{
                    response.success=false;
                    response.message=error.message;
                    res.status(error.code).send(response)
                })
            }else{
                response.message="You cannot add book in the Store";
                res.status(BadRequest).send(response);
            }
        }catch(error){
            next(error)
        }
    }
}

module.exports=new bookController();

