const Blogs = require("../models/Blogs.js");
const Articles = require("../models/Articles.js");
const Videos = require("../models/Videos.js");

const deleteBlog = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await Blogs.deleteOne({ slug });
        if (response.deletedCount === 1) {
            res.status(200).json({ msg: "Post deleted successfully." })
        } else {
            res.status(203).json({ msg: "Error deleting post." })
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

module.exports = { deleteBlog, deleteArticle, deleteVideo };