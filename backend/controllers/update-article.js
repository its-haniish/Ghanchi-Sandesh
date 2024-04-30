const Articles = require("../models/Articles.js");

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

module.exports = updateArticle;


