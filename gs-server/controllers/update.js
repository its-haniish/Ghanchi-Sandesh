const Blogs = require("../models/Blogs.js");
const Articles = require("../models/Articles.js");
const Videos = require("../models/Videos.js")

const updateBlog = async (req, res) => {
    const { slug, post } = req.body;
    try {
        let response = await Blogs.updateOne({ slug }, { ...post });
        if (response.modifiedCount === 1) {
            res.status(200).json({ msg: "Post updated successfully." })
        } else {
            res.status(203).json({ msg: "Error updating post." })
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

module.exports = { updateBlog, updateArticle, updateVideo };


