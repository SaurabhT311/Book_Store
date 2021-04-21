const bookService=require('../Service/bookService');
let {OK, Unauthorized } = require('../Middleware/httpStatusCode.json');
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
                response.message="You are not authorized to add book in the Store";
                res.status(Unauthorized).send(response);
            }
        }catch(error){
            next(error)
        }
    }

    getBookController(req,res,next){
        try{
            bookService.getBookService()
            .then((result)=>{
                console.log("r is:",result);
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
        }catch(error){
            next(error);
        }
    }

    updateBookController(req,res,next){
        try{
            let newData=req.body;
            let id=req.params.id;
            console.log("update Id and data:",id, newData);
            let role = req.decoded.role;
            if(role === "Admin"){
                bookService.updateBookService(id,newData)
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
                response.success=false;
                response.message="You are not authorized to update book in the Store";
                res.status(Unauthorized).send(response);
            }
        }catch(error){
            next(error)
        }
    }

    deleteBookController(req,res,next){
        try{
            let id=req.params.id;
            console.log("Id is:",id);
            let role = req.decoded.role;
            if(role === "Admin"){
                bookService.deleteBookService(id)
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
                response.message="You are not authorized to delete book in the Store";
                res.status(Unauthorized).send(response);
            }
        }catch(error){
            next(error)
        }
    }

}

module.exports=new bookController();

