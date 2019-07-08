var mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true // To get created at and updated at
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;