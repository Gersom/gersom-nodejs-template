require('dotenv').config();
require('module-alias/register');

const express = require("express");
const app = express();

const middlewares = require("@config/middlewares");
const setupRoutes = require("@config/routes");
const listen = require("@config/listen");
const errorHandler = require('@middlewares/errorHandler');

// Config server
middlewares(app);
setupRoutes(app)
  .then(() => {
    app.use(errorHandler);
    listen(app);
  })
  .catch(err => process.exit(1));