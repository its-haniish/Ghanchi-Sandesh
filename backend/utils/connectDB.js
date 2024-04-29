const mongoose = require('mongoose');


// function to connect to Oolkar database
const connectDB = async (database) => {
    try {
        console.log("Connecting to Ghanchi Sandesh...");
        await mongoose.connect(database)
        console.log("Connected to Ghanchi Sandesh")
    } catch (error) {
        console.log("Connection failed to Ghanchi Sandesh")
        process.exit(0);
    }
}


module.exports = connectDB;