const Blogs = require("../models/Blogs.js");
const Articles = require("../models/Articles.js");
const Videos = require("../models/Videos.js")
const GSBlogs = require('../models/gs/GSBlogs.js')
const GSArticles = require('../models/gs/GSArticle.js')
const GSVideos = require('../models/gs/GSVideos.js');
const GSPdfs = require('../models/gs/GSPdfs.js');
const compressImage = require("../utils/compressImage.js");

const createBlog = async (req, res) => {
    try {
        const response = await Blogs.create({ ...req.body })
        if (response) {
            console.log("Created post : ", response.slug);
            res.status(200).json({ msg: "Post created successfully.", post: response.slug });
        } else {
            console.log("Error creating post.");
            res.status(203).json({ msg: "Error creating post." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}



// This is where i need to compress the image before saving it to database.
const createGSBlog = async (req, res) => {
    try {
        console.log('creating gs post...');
        // const featured  = await compressImage(req.body.featured);
        const response = await GSBlogs.create({ ...req.body})
        if (response) {
            console.log("Created post : ", response.slug);
            res.status(200).json({ msg: "Post created successfully.", post: response.slug });
        } else {
            console.log("Error creating post.");
            res.status(203).json({ msg: "Error creating post." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const createGSPdf = async (req, res) => {
    try {
        console.log('creating gs pdf...');
        const response = await GSPdfs.create({ ...req.body })
        if (response) {
            console.log("Created post : ", response._id);
            res.status(200).json({ msg: "Pdf created successfully.", pdf: response._id });
        } else {
            console.log("Error creating pdf.");
            res.status(203).json({ msg: "Error creating pdf." });
        }
    } catch (error) {
        console.log(error);
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

const createGSArticle = async (req, res) => {
    try {
        const response = await GSArticles.create({ ...req.body })
        if (response) {
            console.log("Created article : ", response.slug);
            res.status(200).json({ msg: "Article created successfully.", post: response });
        } else {
            console.log("Error creating post.");
            res.status(203).json({ msg: "Error creating Article." });
        }
    } catch (error) {
        console.log(error)
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

const createGSVideo = async (req, res) => {
    try {
        const response = await GSVideos.create({ ...req.body })
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

module.exports = { createBlog, createArticle, createVideo, createGSBlog, createGSArticle, createGSVideo, createGSPdf };
