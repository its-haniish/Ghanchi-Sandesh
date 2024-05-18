const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema({
    featured: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: true
    }
});


const Articles = new mongoose.model('Article', articlesSchema);

module.exports = Articles;