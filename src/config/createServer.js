const express = require('express');
const middlewares = require('./middlewares');
const setupRoutes = require('./setupRoutes');
const errorHandler = require('@middlewares/errorHandler');
const listen = require('@config/listen');

async  function createServer() {
  const app = express();
  middlewares(app);
  await setupRoutes(app);
  app.use(errorHandler);
  listen(app);
  return app;
}

module.exports = createServer;