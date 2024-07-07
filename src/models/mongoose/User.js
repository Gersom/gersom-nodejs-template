const mongoose = require('mongoose');
const addMethods = require('./utils/addStaticMethods');

const userSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    trim: true
  },
  email: { 
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { 
    type: String,
    required: true
  },
  gender: { 
    type: String,
    required: false,
    enum: ['male', 'female', 'other']
  },
  image: { 
    type: String,
    required: false,
    trim: true
  },
  whatsapp: { 
    type: String,
    required: false,
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
});

// Índices para mejorar el rendimiento de las consultas
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ name: 1 });

// Método de instancia para obtener una representación formateada
userSchema.methods.toJSON = function() {
  const { _id, password, ...others } = this.toObject();
  return { id: _id, ...others };
};

// Agregar métodos estáticos
addMethods(userSchema);

module.exports = mongoose.model('User', userSchema);