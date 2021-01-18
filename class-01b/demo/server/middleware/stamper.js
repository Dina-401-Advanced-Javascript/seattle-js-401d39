'use strict';

// middleware is really good at adding things onto the request object

//so stamper is just going to stop the request object, add a property called timestamp (assigning it to current datetime using "new Date()") 
//then move along using "next()" which will take it to the next middleware argument;
module.exports = (req, res, next) => {
    req.timeStamp = new Date();
    next();
}