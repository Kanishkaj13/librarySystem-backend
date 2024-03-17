import { Constants } from "../Constants.mjs";



const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode){
        
    case Constants.VALIDATION_ERROR:
    res.json({ title :"validation failed",messgae : err.message , stackTrcae : err.stack});
    break;

    case Constants.NOT_FOUND:
    res.json({ title :"not found",messgae : err.message , stackTrcae : err.stack});

    case Constants.UNATHOURIZED:
    res.json({ title :"unauthorized",messgae : err.message , stackTrcae : err.stack});

    case Constants.FORBIDDEN:
    res.json({ title :"forbidden",messgae : err.message , stackTrcae : err.stack});

    case Constants.SERVER_ERROR:
        res.json({ title :"server error",messgae : err.message , stackTrcae : err.stack});

    default:
        console.log("no error");
        break;
    
}
};
export default errorHandler;