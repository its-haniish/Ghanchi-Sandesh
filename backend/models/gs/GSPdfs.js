const mongoose = require('mongoose');

const pdfsSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    featured: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const GSPdfs = new mongoose.model('GSPdf', pdfsSchema);

module.exports = GSPdfs;