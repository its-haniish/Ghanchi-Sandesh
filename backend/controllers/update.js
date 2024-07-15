const Blogs = require("../models/Blogs.js");
const Articles = require("../models/Articles.js");
const Videos = require("../models/Videos.js")
const GSBlogs = require('../models/gs/GSBlogs.js')
const GSArticles = require('../models/gs/GSArticle.js')
const GSVideos = require('../models/gs/GSVideos.js');
const GSPdfs = require('../models/gs/GSPdfs.js')


const updateBlog = async (req, res) => {
    const { slug, post } = req.body;
    try {
        let response = await Blogs.updateOne({ slug }, { ...post });
        if (response.modifiedCount === 1) {
            console.log("Post updated: ", slug);
            res.status(200).json({ msg: "Post updated successfully." })
        } else {
            res.status(203).json({ msg: "Error updating post." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const updateGSBlog = async (req, res) => {
    const { slug, post } = req.body;
    try {
        console.log("Checking if post exists: ", slug);
        const existingPost = await GSBlogs.findOne({ slug });
        if (!existingPost) {
            console.log("No post found with slug: ", slug);
            return res.status(404).json({ msg: "Post not found." });
        }

        console.log("Updating post: ", slug);
        let response = await GSBlogs.updateOne({ slug }, { ...post });
        console.log("Response: ", response);
        if (response.modifiedCount === 1) {
            console.log("Post updated: ", slug);
            res.status(200).json({ msg: "Post updated successfully." });
        } else {
            console.log("Error updating post: No changes made.");
            res.status(203).json({ msg: "Error updating post. No changes made." });
        }
    } catch (error) {
        console.log("Error updating post: ", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}
const updateGSPdf = async (req, res) => {
    const { id, pdf } = req.body;
    try {
        let response = await GSPdfs.updateOne({ _id: id }, { ...pdf });
        if (response.modifiedCount === 1) {
            res.status(200).json({ msg: "Pdf updated successfully." })
        } else {
            res.status(203).json({ msg: "Error updating pdf." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const updateArticle = async (req, res) => {
    const { slug, article } = req.body;
    try {
        let response = await Articles.updateOne({ slug }, { ...article });
        if (response.modifiedCount === 1) {
            res.status(200).json({ msg: "Article updated successfully." })
        } else {
            res.status(203).json({ msg: "Error updating article." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const updateGSArticle = async (req, res) => {
    const { slug, article } = req.body;
    try {
        let response = await GSArticles.updateOne({ slug }, { ...article });
        if (response.modifiedCount === 1) {
            res.status(200).json({ msg: "Article updated successfully." })
        } else {
            res.status(203).json({ msg: "Error updating article." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}


const updateVideo = async (req, res) => {
    const { video } = req.body;
    try {
        let response = await Videos.updateOne({ _id: video._id }, { ...video });
        if (response.modifiedCount === 1) {
            res.status(200).json({ msg: "Video updated successfully." })
        } else {
            res.status(203).json({ msg: "Error updating video." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const updateGSVideo = async (req, res) => {
    const { video } = req.body;
    try {
        let response = await GSVideos.updateOne({ _id: video.id }, { ...video });
        if (response.modifiedCount === 1) {
            res.status(200).json({ msg: "Video updated successfully." })
        } else {
            res.status(203).json({ msg: "Error updating video." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}
module.exports = { updateBlog, updateArticle, updateVideo, updateGSArticle, updateGSBlog, updateGSVideo, updateGSPdf };


