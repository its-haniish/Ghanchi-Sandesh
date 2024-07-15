const Blogs = require("../models/Blogs.js");
const Articles = require("../models/Articles.js");
const Videos = require("../models/Videos.js");
const GSBlogs = require('../models/gs/GSBlogs.js')
const GSArticles = require('../models/gs/GSArticle.js')
const GSVideos = require('../models/gs/GSVideos.js');
const GSPdfs = require('../models/gs/GSPdfs.js')


const deleteBlog = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await Blogs.deleteOne({ slug });
        if (response.deletedCount === 1) {
            console.log("Post deleted: ", slug);
            res.status(200).json({ msg: "Post deleted successfully." })
        } else {
            res.status(203).json({ msg: "Error deleting post." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const deleteGSBlog = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await GSBlogs.deleteOne({ slug });
        if (response.deletedCount === 1) {
            console.log("Post deleted: ", slug);
            res.status(200).json({ msg: "Post deleted successfully." })
        } else {
            res.status(203).json({ msg: "Error deleting post." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const deleteGSPdf = async (req, res) => {
    const { id } = req.body;
    try {
        let response = await GSPdfs.deleteOne({ _id: id });
        if (response.deletedCount === 1) {
            console.log("Post deleted: ", id);
            res.status(200).json({ msg: "Pdf deleted successfully." })
        } else {
            res.status(203).json({ msg: "Error deleting pdf." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const deleteArticle = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await Articles.deleteOne({ slug });
        if (response.deletedCount === 1) {
            res.status(200).json({ msg: "Article deleted successfully." })
        } else {
            res.status(203).json({ msg: "Error deleting article." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const deleteGSArticle = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await GSArticles.deleteOne({ slug });
        if (response.deletedCount === 1) {
            res.status(200).json({ msg: "Article deleted successfully." })
        } else {
            res.status(203).json({ msg: "Error deleting article." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const deleteVideo = async (req, res) => {
    const { link } = req.body;
    const decodedLink = decodeURIComponent(link)
    try {
        let response = await Videos.deleteOne({ link: decodedLink });
        if (response.deletedCount === 1) {
            res.status(200).json({ msg: "Video deleted successfully." })
        } else {
            res.status(203).json({ msg: "Error deleting video." })
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const deleteGSVideo = async (req, res) => {
    const { id } = req.body;
    try {
        console.log("Deleting video with id: ", id)
        let response = await GSVideos.deleteOne({ _id: id });
        if (response.deletedCount === 1) {
            res.status(200).json({ msg: "Video deleted successfully." })
        } else {
            res.status(203).json({ msg: "Error deleting video." })
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

module.exports = { deleteBlog, deleteArticle, deleteVideo, deleteGSArticle, deleteGSBlog, deleteGSVideo, deleteGSPdf };