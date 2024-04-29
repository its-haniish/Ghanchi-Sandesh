const Blogs = require("../models/Blogs.js");

const getBlog = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await Blogs.findOne({ slug })
        if (response) {
            res.status(200).json({ response });
        } else {
            res.status(203).json({ msg: "Unable to fetch data." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getBlogsByPage = async (req, res) => {
    const { page } = req.body;
    const perPage = 15;
    try {
        const pageNum = parseInt(page)
        const blogs = await Blogs.find()
            .skip((pageNum - 1) * perPage)
            .limit(perPage)
            .sort({ createdAt: -1 });

        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const getAllPosts = async (req, res) => {
    try {
        let response = await Blogs.find({})
        if (response) {
            res.status(200).json({ response });
        } else {
            res.status(203).json({ msg: "Unable to fetch data." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });

    }
}

module.exports = { getBlog, getBlogsByPage, getAllPosts };