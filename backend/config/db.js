// Archjivo que gestiona la conexión con la base de datos

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // conexión a Mongo
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Termina el proceso si hay un error
    }
};

module.exports = connectDB;
