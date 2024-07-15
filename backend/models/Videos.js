const mongoose = require('mongoose');

const videosSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Videos = new mongoose.model('Video', videosSchema);

module.exports = Videos;