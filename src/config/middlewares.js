const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const middlewares = (app) => {
  if (process.env.NODE_ENV === 'development') {
    // Logging con Morgan
    const morgan = require('morgan');
    app.use(morgan('dev'));
  }

  // Parsing JSON y url-encoded data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // CORS configuration
  app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? process.env.ALLOWED_ORIGINS : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    credentials: true
  }));

  // Additional security
  app.use(helmet());
};

module.exports = middlewares;