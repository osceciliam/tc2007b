const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register); // Ruta para registrar usuario
router.post('/login', userController.login); // Ruta para login de usuario

module.exports = router;
