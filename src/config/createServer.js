const express = require('express');
const middlewares = require('./middlewares');
const setupRoutes = require('./setupRoutes');
const errorHandler = require('@middlewares/errorHandler');
const listen = require('@config/listen');

function createServer() {
  const app = express();
  middlewares(app);
  setupRoutes(app);
  app.use(errorHandler);
  listen(app);
  return app;
}

module.exports = createServer;