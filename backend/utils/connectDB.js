const mongoose = require('mongoose');


// function to connect to Oolkar database
const connectDB = async (database) => {
    try {
        console.log("Connecting to Batchmate...");
        await mongoose.connect(database)
        console.log("Connected to Batchmate")
    } catch (error) {
        console.log("Connection failed to Batchmate")
        process.exit(0);
    }
}


module.exports = connectDB;