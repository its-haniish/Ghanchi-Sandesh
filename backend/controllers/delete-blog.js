const Blogs = require("../models/Blogs.js");

const deleteBlog = async (req, res) => {
    const { _id } = req.body;
    try {
        let response = await Blogs.deleteOne({ _id });
        if (response.deletedCount === 1) {
            res.status(200).json({ msg: "Post deleted successfully." })
        } else {
            res.status(203).json({ msg: "Error deleting post." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

module.exports = deleteBlog;