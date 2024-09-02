//Modelo de datos para los usuarios

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['administrador', 'lector'], default: 'lector' }
});

module.exports = mongoose.model('User', UserSchema);