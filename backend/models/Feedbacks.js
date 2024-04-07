const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    teacherId: {
        type: String,
        required: true
    },
    teacherName: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
});

const Feedbacks = new mongoose.model('Feedbacks', feedbackSchema);

module.exports = Feedbacks;