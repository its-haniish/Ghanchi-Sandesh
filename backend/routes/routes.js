const express = require('express');
const routes = express.Router();

// importing the controllers
const {
    createBlog,
    createArticle,
    createVideo,
    createGSArticle,
    createGSBlog,
    createGSVideo,
    createGSPdf
} = require("../controllers/create.js")
const {
    updateBlog,
    updateArticle,
    updateVideo,
    updateGSArticle,
    updateGSBlog,
    updateGSVideo,
    updateGSPdf
} = require("../controllers/update.js")
const {
    deleteBlog,
    deleteArticle,
    deleteVideo,
    deleteGSArticle,
    deleteGSBlog,
    deleteGSVideo,
    deleteGSPdf
} = require("../controllers/delete.js")
const {
    getBlog,
    getBlogsByPage,
    getAllPosts,
    getAllArticles,
    getArticle,
    getAllVideos,
    getVideo,
    getAllPostSlugs,
    getAllGSArticles,
    getAllGSPosts,
    getGSArticle,
    getAllGSVideos,
    getGSBlog,
    getGSVideo,
    getAllGSPostSlugs,
    getAllGSArticleSlugs,
    getGSBlogCards,
    getAllGSPdfs,
    getGSPdf,
    getGSBlogCardsByPages
} = require('../controllers/fetch.js')

const {
    sendEmail
} = require('../controllers/sendEmail.js')

routes
    .post('/create-post', createBlog)
    .post('/delete-post', deleteBlog)
    .post('/update-post', updateBlog)
    .post('/get-post', getBlog)
    .post('/get-post-by-page', getBlogsByPage)
    .post('/get-all-posts', getAllPosts)
    .post('/create-gs-post', createGSBlog)
    .post('/update-gs-post', updateGSBlog)
    .post('/delete-gs-post', deleteGSBlog)
    .post('/get-all-gs-posts', getAllGSPosts)
    .post('/get-gs-post', getGSBlog)
    .post('/create-article', createArticle)
    .post('/delete-article', deleteArticle)
    .post('/update-article', updateArticle)
    .post('/get-article', getArticle)
    .post('/get-all-articles', getAllArticles)
    .post('/get-gs-article', getGSArticle)
    .post('/get-all-gs-articles', getAllGSArticles)
    .post('/create-gs-article', createGSArticle)
    .post('/update-gs-article', updateGSArticle)
    .post('/delete-gs-article', deleteGSArticle)
    .post('/create-video', createVideo)
    .post('/update-video', updateVideo)
    .post('/delete-video', deleteVideo)
    .post('/get-video', getVideo)
    .post('/get-all-videos', getAllVideos)
    .post('/get-all-gs-videos', getAllGSVideos)
    .post('/get-gs-video', getGSVideo)
    .post('/create-gs-video', createGSVideo)
    .post('/update-gs-video', updateGSVideo)
    .post('/delete-gs-video', deleteGSVideo)
    .post('/get-all-post-slugs', getAllPostSlugs)
    .post('/get-all-gs-post-slugs', getAllGSPostSlugs)
    .post('/get-all-gs-article-slugs', getAllGSArticleSlugs)
    .post('/get-gs-blog-cards', getGSBlogCards)
    .post('/create-gs-pdf', createGSPdf)
    .post('/update-gs-pdf', updateGSPdf)
    .post('/delete-gs-pdf', deleteGSPdf)
    .post('/get-all-gs-pdfs', getAllGSPdfs)
    .post('/get-gs-pdf', getGSPdf)
    .post('/send-msg', sendEmail)
    .post('/get-blog-cards-by-pages', getGSBlogCardsByPages)
    .get('/', (req, res) => {
        res.send('Welcome to the backend server of the website');
    })

module.exports = routes;