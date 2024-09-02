// Este archivo gestiona las acciones de nuestro CRUD para los posts del blog

const Post = require('../models/Post');

// Obtener todos los posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        const postsWithId = posts.map(post => ({
            id: post._id,
            title: post.title,
            content: post.content
        }));
        res.set('X-Total-Count', posts.length);
        res.json(postsWithId);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
};

// Obtener un post por ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post) {
            res.json({
                id: post._id,
                title: post.title,
                content: post.content
            });
        } else {
            res.status(404).json({ error: 'Post no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el post' });
    }
};

// Crear un nuevo post
exports.createPost = async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content
        });
        const savedPost = await newPost.save();
        res.status(201).json({
            id: savedPost._id,
            title: savedPost.title,
            content: savedPost.content
        });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el post' });
    }
};

// Actualizar un post por ID
exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            content: req.body.content
        }, { new: true });
        if (updatedPost) {
            res.json({
                id: updatedPost._id,
                title: updatedPost.title,
                content: updatedPost.content
            });
        } else {
            res.status(404).json({ error: 'Post no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el post' });
    }
};

// Eliminar un post por ID
exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (deletedPost) {
            res.json({ id: deletedPost._id });
        } else {
            res.status(404).json({ error: 'Post no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el post' });
    }
};
