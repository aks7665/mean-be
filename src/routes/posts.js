const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('', async (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    try {
        await post.save();
        res.status(201).json({
            post: post,
            message: 'Post added sucessfully.'
        }); 
    } catch (e) {
        res.status(400).send(e);
    }
});

router.put('/:id', async (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    const result = await Post.updateOne({ _id: req.params.id}, {
        $set: {
            title: req.body.title,
            content: req.body.content
        }
    });  
    if (!result) {
        res.status(400).send(e);
    }
    res.status(201).json({
        post: post,
        message: 'Post updated sucessfully.'
    });
});

router.delete('/:id', async (req, res, next) => {
    const result = await Post.deleteOne({_id: req.params.id});
    if(result) {
        res.status(200).json({
            message: result
        });
    } else {
        res.status(404).json({
            message: 'Error while fetching posts.'
        });
    }
});

router.get('/:id', async (req, res, next) => {
    const postId = req.params.id;
    const result = await Post.findOne({ _id: postId});
    if(result) {
        res.status(200).json({
            message: 'Post fetched.',
            post: result
        });
    } else {
        res.status(404).json({
            message: 'Error while fetching post.'
        });
    }
});

router.get('', async (req, res, next) => {
    const posts = await Post.find();
    res.status(200).json({
        message: 'Posts fetched sucessfully.',
        posts
    });
});

module.exports = router;