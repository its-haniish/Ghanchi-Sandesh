const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    image: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    subject: {
        type: [String],
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    feedbacks: {
        type: [String],
        default: []
    },
    college: {
        type: String,
        required: true
    }

});


const Teachers = new mongoose.model('Teacher', teacherSchema);

module.exports = Teachers;
