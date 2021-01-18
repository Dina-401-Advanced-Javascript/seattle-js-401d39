'use strict';

function notFoundHandler(req,res,next){
    res.status(400);
    res.statusMessage =  'Resource Not Found';
    res.json({error: 'not found'});
}

module.exports = notFoundHandler;