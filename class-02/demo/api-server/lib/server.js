'use strict';

const express = require('express');
const app = express(); 

//body parser that accepts json
app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).send('Hello World! :)');
});

app.get('/fruit', (req,res) => {
    let output = {
        type: req.query.type
    }

    res.status(200).json(output);
})

//body
app.post('/fruit',(req,res) => {
    console.log('what got added?', req.body);
    res.status(200).send('ok');
})

app.put('/fruit', (req,res) => {
    console.log('what got updated?',req.body);
    res.status(200).send('okay');
})

// Middleware

// middleware functions have three options:
// 1. all good - next()
// 2. not good - next ('message') - throw an error
// 3. deal with it yourself - don't call next, but deal with the response object

//log a request
const logRequest = require('./logger');

//express works by saying 'use this function as a piece of middleware
//it will execute in the order that we use app.use
app.use(logRequest);


function getBrowser(req,res,next) {
    req.browser = req.headers['user-agent'];
    next();
}

app.get('/browser', getBrowser, (req,res) => {
    let output = {
        browser: req.browser,
    }
    res.status(200).json(output);
});

function square(n){
    return (req,res,next) =>{
        if (typeof n!= 'number') {
            next('Not a number.');//make it skip the rest of the middleware and just throw an error
        } else {
            req.number = n * n;
            next();
        }
    }
}

app.get('/mw', square(10), getBrowser, (req,res) => {
    let output = {
        browser: req.browser,
        number: req.number
    }
    res.status(200).json(output);
});


// CRUD: CREATE READ UPDATE DELETE

let db = [];

//get all
app.get('/api/v1/food', (req,res,next) => {

})

//get one
app.get('/api/v1/food/:id', (req,res,next) => {
    let id = { i}
})

//create 
app.post('/api/v1/food', (req,res,next) => {
    //create a new object
    let record = {name: req.body.name};
    record.id = db.length + 1;
    db.push(record);
    res.status(200).json(record); 
})

//update
app.put('/api/v1/food/:id', (req,res,next) => {
    const idToUpdate = req.params.id;
    let { name, id}= req.body;
    let updatedRecord = {name, id};
    db = db.map(record => record.id === parseInt(idToUpdate));
    res.json (updatedRecord);
})

//delete
app.delete('/api/v1/food/:id', (req,res,next) => {
    const id = req.params.id;
    db = db.filter(food => food.id !== parseIntid);
    res.status(204).status.send('ok');
})

const notFoundHandler = require('../handlers/404');
const errorHandler = require('../handlers/500');

//catch alls at the bottom
app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT) {
    app.listen(PORT, ()=> {
        console.log(`Server up on port ${PORT}`);
    })
}

module.exports = {
    server: app,
    start: start
}