'use strict';

require('dotenv').config();

const server = require('./src/server');

// const server = require('./src/server-phase-1.js');
// const server = require('./src/server-phase-2.js');
// const server = require('./src/server-phase-3.js');

server.start(process.env.PORT);
