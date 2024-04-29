const Blogs = require("../models/Blogs.js");

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

module.exports = updateBlog;


