// middlewares/errorHandler.js
const { NotFoundError, ValidationError } = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof NotFoundError || err instanceof ValidationError) {
    return res.status(err.status).json({
      error: err.message
    });
  }

  // En entorno de desarrollo, incluye el mensaje de error completo
  if (process.env.NODE_ENV === 'development') {
    return res.status(500).json({
      error: 'An unexpected error occurred',
      message: err.message,
      stack: err.stack
    });
  }

  // En producción, envía un mensaje genérico
  res.status(500).json({
    error: 'An unexpected error occurred'
  });
};

module.exports = errorHandler;