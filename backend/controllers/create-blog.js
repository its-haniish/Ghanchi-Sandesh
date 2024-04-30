const Blogs = require("../models/Blogs.js");

const createBlog = async (req, res) => {
    try {
        console.log("Creating post...");
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


module.exports = createBlog;
