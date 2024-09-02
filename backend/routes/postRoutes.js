// En este archivo se indican las rutas que de nuesta API (endpoints del backend) para la gestión de los posts del blog

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authenticateJWT = require('../middlewares/auth');

router.get('/', authenticateJWT, postController.getAllPosts); // Obtener todos los posts
router.get('/:id', authenticateJWT, postController.getPostById); // Obtener un post por ID
router.post('/', authenticateJWT, postController.createPost); // Crear un nuevo post
router.put('/:id', authenticateJWT, postController.updatePost); // Actualizar un post por ID
router.delete('/:id', authenticateJWT, postController.deletePost); // Eliminar un post por ID

module.exports = router;
