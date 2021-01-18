'use strict';

const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
    'id': String,
    'capacity': Number,
    'color': {
        "type": Array,
        "schema": [String]
    },
    'droppable': { type: Boolean, default: true }
});

module.exports = dynamoose.model('mug', schema);