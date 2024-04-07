const express = require('express');
const routes = express.Router();

// importing the contrllers
const login = require('../controllers/login.js');

routes
    .post('/login', login)



module.exports = routes;