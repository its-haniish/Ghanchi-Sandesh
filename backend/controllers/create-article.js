const Articles = require("../models/Articles.js");

const createArticle = async (req, res) => {
    try {
        console.log("Creating article...");
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

module.exports = createArticle;
