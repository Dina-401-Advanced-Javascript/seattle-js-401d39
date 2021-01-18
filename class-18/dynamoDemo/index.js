'use strict';

const uuid = require('uuid').v4;
const mugModel = require('./mug.schema');

exports.handler = async (event) => {
    console.log('-----------------------EVENTTTTT ----------------------');
    console.log(event);
    const { capacity, color, droppable } = JSON.parse(event.body);

    const id = uuid();

    try {
        const record = new mugModel({ id, capacity, color, droppable });
        const data = await record.save();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            response: error.message
        }
    }
}