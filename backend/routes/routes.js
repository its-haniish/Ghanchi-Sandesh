const express = require('express');
const routes = express.Router();

// importing the contrllers
const createBlog = require("../controllers/create-blog.js")
const updateBlog = require("../controllers/update-blog.js")
const deleteBlog = require("../controllers/delete-blog.js")
const { getBlog, getBlogsByPage, getAllPosts } = require('../controllers/getBlog.js')

const createArticle = require("../controllers/create-article.js")
const updateArticle = require("../controllers/update-article.js")
const deleteArticle = require("../controllers/delete-article.js")
const { getArticle, getAllArticles } = require('../controllers/getArticle.js')


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



module.exports = routes;