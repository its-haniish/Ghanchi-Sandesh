const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const connectDB = require('./utils/connectDB.js')
const routes = require('./routes/routes.js')

app.use(express.json({ limit: '50mb' }));
app.use(cors(
    {
        origin: "http://localhost:3000"
    }
));
app.use('/', routes);

app.get("/", (req, res) => {
    res.send("<h1>Server is running...</h1>")
})


// calling the connectDB function and listening server in then block
connectDB("mongodb://127.0.0.1:27017/gs-database").then(() => {
    // listening server
    app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
    });
});



