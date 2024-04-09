const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    featured: {
        type: String,
        default: ''
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
    time: {
        type: Number,
        required: true
    },
    location: {
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