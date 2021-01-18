'use strict';

// getting started
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('I am connected');
});

// 1. create a schema
const kittySchema = new mongoose.Schema({
    name: String
});

// 2. make a model with that schema
const Kitten = mongoose.model('Kitten', kittySchema);

console.log(Kitten);

const silence = new Kitten({ name: 'Silence' });
console.log(silence); 

// takes time to hit the database! It's a promise so has a .then
// async code!
// if we want to use async await we can put this in a function. 
silence.save().then(() => console.log('meow'));
