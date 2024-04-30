const Articles = require("../models/Articles.js");

const getArticle = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await Articles.findOne({ slug })
        console.log(slug);
        if (response) {
            res.status(200).json({ response });
        } else {
            res.status(203).json({ msg: "Unable to fetch data." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getAllArticles = async (req, res) => {
    try {
        let response = await Articles.find({})
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

module.exports = { getArticle, getAllArticles };