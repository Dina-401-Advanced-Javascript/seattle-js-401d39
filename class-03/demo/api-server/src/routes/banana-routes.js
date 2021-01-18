'use strict';

//CRUD - CREATE - READ - UPDATE - DELETE 
//REST - post      get     put    delete

const express = require('express');
const router = express.Router();
const Bananas = require('../models/bananas');
const bananas = new Bananas();

//RESTful routes
router.get('/bananas', getBananas);
router.get('/bananas/:id', getOneBanana);
router.post('/bananas', createBanana);
router.delete('/bananas/:id', deleteOneBanana);
router.put('/bananas/:id', updateBanana);

//RESTful route handlers
function getBananas(req, res) {
    const allBananas = bananas.get();
    res.status(200).json(allBananas);
}

function getOneBanana(req, res) {
    const oneBanana = bananas.get(req.params.id);
    res.status(200).json(oneBanana);
}

function createBanana(req, res) {
    var obj = req.body;
    const newBanana = bananas.create(obj);
    res.status(200).json(newBanana);
}

function deleteOneBanana(req, res) {
    res.status(200).send("deleted that banana");
}

function updateBanana(req, res) {
    res.status(200).send("updated that banana");
}

module.exports = router;