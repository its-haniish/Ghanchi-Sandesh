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
    contents: {
        type: Array,
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


const GSArticles = new mongoose.model('GSArticle', articlesSchema);

module.exports = GSArticles;