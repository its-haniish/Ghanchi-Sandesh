const express = require('express');
const routes = express.Router();

// importing the contrllers
const login = require('../controllers/login.js');
const createBlog = require("../controllers/create-blog.js")
const updateBlog = require("../controllers/update-blog.js")
const deleteBlog = require("../controllers/delete-blog.js")
const { getBlog, getBlogsByPage, getAllPosts } = require('../controllers/getBlog.js')


routes
    .post('/login', login)
    .post('/create-post', createBlog)
    .post('/delete-post', deleteBlog)
    .post('/update-post', updateBlog)
    .post('/get-post', getBlog)
    .post('/get-post-by-page', getBlogsByPage)
    .post('/get-all-posts', getAllPosts)



module.exports = routes;