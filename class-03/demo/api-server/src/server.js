'use strict';

const express = require('express');
const app = express();

//our middleware
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const bananaRoutes = require('./routes/banana-routes');

//my middleware
app.use(express.json()); //body parser
app.use(logger);
app.use(bananaRoutes);

//Proof of life. Can get rid of this whole section and make the file even cleaner.
app.get('/demo', demoCallBackHandler);

function demoCallBackHandler(req,res,next){
    res.status(200).send('Alive!');
}

//catch alls and error handling
app.use('*',notFoundHandler);
app.use(serverError);

module.exports = {
    server: app,
    start: port => {
        if (!port) { throw new Error('missing port');}
        app.listen(port,() => {
            console.log(`listening on ${port}`);
        })
    }
}