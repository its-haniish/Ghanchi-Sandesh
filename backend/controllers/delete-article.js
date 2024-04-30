const Articles = require("../models/Articles.js");

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

module.exports = deleteArticle;