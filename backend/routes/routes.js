const express = require('express');
const routes = express.Router();

// importing the controllers
const { createBlog, createArticle, createVideo } = require("../controllers/create.js")
const { updateBlog, updateArticle, updateVideo } = require("../controllers/update.js")
const { deleteBlog, deleteArticle, deleteVideo } = require("../controllers/delete.js")
const { getBlog, getBlogsByPage, getAllPosts, getAllArticles, getArticle, getAllVideos, getVideo } = require('../controllers/fetch.js')

routes
    .post('/create-post', createBlog)
    .post('/delete-post', deleteBlog)
    .post('/update-post', updateBlog)
    .post('/get-post', getBlog)
    .post('/get-post-by-page', getBlogsByPage)
    .post('/get-all-posts', getAllPosts)
    .post('/create-article', createArticle)
    .post('/delete-article', deleteArticle)
    .post('/update-article', updateArticle)
    .post('/get-article', getArticle)
    .post('/get-all-articles', getAllArticles)
    .post('/create-video', createVideo)
    .post('/update-video', updateVideo)
    .post('/delete-video', deleteVideo)
    .post('/get-video', getVideo)
    .post('/get-all-videos', getAllVideos)

module.exports = routes;