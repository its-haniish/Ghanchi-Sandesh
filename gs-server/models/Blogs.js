const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    featured: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        default: []
    },
    title: {
        type: String,
        required: true
    },
    news: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    lastUpdated: {
        type: Number,
        default: null
    }
});


const Blogs = new mongoose.model('Blog', blogsSchema);

module.exports = Blogs;