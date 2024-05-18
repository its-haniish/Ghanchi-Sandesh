const Blogs = require("../models/Blogs.js");
const Articles = require("../models/Articles.js");
const Videos = require("../models/Videos.js")

const createBlog = async (req, res) => {
    try {
        const response = await Blogs.create({ ...req.body })
        if (response) {
            console.log("Created post : ", response);
            res.status(200).json({ msg: "Post created successfully.", post: response.slug });
        } else {
            console.log("Error creating post.");
            res.status(203).json({ msg: "Error creating post." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}


const createArticle = async (req, res) => {
    try {
        const response = await Articles.create({ ...req.body })
        if (response) {
            console.log("Created article : ", response.slug);
            res.status(200).json({ msg: "Article created successfully.", post: response });
        } else {
            console.log("Error creating post.");
            res.status(203).json({ msg: "Error creating Article." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const createVideo = async (req, res) => {
    try {
        const response = await Videos.create({ ...req.body })
        if (response) {
            console.log("Created video : ", response.link);
            res.status(200).json({ msg: "Video created successfully.", video: response });
        } else {
            console.log("Error creating post.");
            res.status(203).json({ msg: "Error creating Article." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

module.exports = { createBlog, createArticle, createVideo };
