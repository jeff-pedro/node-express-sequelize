const express = require('express');
const routes = require('./router');

const app = express();

routes(app);

module.exports = app;
