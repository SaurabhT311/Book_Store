const routes=require('./Routes/routes');
const express=require('express')
const app=express();
const {InternalServerError}=require('./Middleware/httpStatusCode.json');
const port=5000;
require('dotenv').config();

const { infoLogger, errorLogger}=require('./Middleware/logger');

app.use(express.json());

app.use('/',routes);

app.use((error,req,res,next)=>{
    let response={
        success:false,
        status:InternalServerError,
        message:error.message
    };
    errorLogger.error(JSON.stringify(response));
    res.json(response);
})

app.listen(port, ()=>{
    infoLogger.info(`This is port ${port}`);
    require('./Dbconfig/dbconfig');
})