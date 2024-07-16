const Articles = require("../models/Articles.js");
const Blogs = require("../models/Blogs.js");
const Videos = require("../models/Videos.js");
const GSBlogs = require('../models/gs/GSBlogs.js')
const GSArticles = require('../models/gs/GSArticle.js')
const GSVideos = require('../models/gs/GSVideos.js');
const GSPdfs = require('../models/gs/GSPdfs.js')


const getAllPosts = async (req, res) => {
    console.log("Fetching all posts");
    try {
        let response = await Blogs.find({});
        console.log("Posts fetched :", response.length)
        if (response.length > 0) {
            res.status(200).json({ response });
        } else {
            res.status(204).json({ msg: "No posts found." });
        }
    } catch (error) {
        console.error("Error fetching all posts:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getAllGSPosts = async (req, res) => {
    console.log("Fetching all posts");
    try {
        let response = await GSBlogs.find({});
        let reversedRes = response.reverse();
        console.log("Posts fetched :", response.length)
        if (response.length > 0) {
            res.status(200).json({ response: reversedRes });
        } else {
            res.status(204).json({ msg: "No posts found." });
        }
    } catch (error) {
        console.error("Error fetching all posts:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getGSPdf = async (req, res) => {
    const { id } = req.body;
    try {
        let response = await GSPdfs.findOne({ _id: id })

        if (response) {
            res.status(200).json({ response });
        } else {
            res.status(203).json({ msg: "Unable to fetch data." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getAllGSPdfs = async (req, res) => {
    console.log("Fetching all pdfs");
    try {
        let response = await GSPdfs.find({});
        let reversedRes = response.reverse();

        console.log("Pdfs fetched :", response.length)
        if (response.length > 0) {
            res.status(200).json({ response: reversedRes });
        } else {
            res.status(204).json({ msg: "No pdf found." });
        }
    } catch (error) {
        console.error("Error fetching all posts:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getAllPostSlugs = async (req, res) => {
    try {
        let response = await Blogs.find({}).select('slug');

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getGSBlogCards = async (req, res) => {
    try {
        // Retrieve specific fields: author, location, title, featured
        let blogs = await GSBlogs.find({}, { author: 1, location: 1, title: 1, featured: 1, contents: 1, slug: 1 });

        // Process each blog to find the first content of type 'Paragraph'
        let processedBlogs = blogs.map(blog => {
            let paragraph = blog.contents.find(content => content.type === 'Paragraph');
            return {
                slug: blog.slug,
                author: blog.author,
                location: blog.location || 'India',
                title: blog.title,
                featured: blog.featured,
                contents: paragraph
            };
        });
        let reversedRes = processedBlogs.reverse();

        res.status(200).json(reversedRes);
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const getGSBlogCardsByPages = async (req, res) => {
    try {
        // Extract page number from request body with a default value of 1
        const page = parseInt(req.body.page) || 1;
        const limit = 4; // Fixed limit of 4 posts per page
        const skip = (page - 1) * limit;

        // Retrieve specific fields: author, location, title, featured
        let blogs = await GSBlogs.find({}, { author: 1, location: 1, title: 1, featured: 1, contents: 1, slug: 1 })
            .sort({ _id: -1 }) // Reverse order by default
            .skip(skip)
            .limit(limit);

        // Process each blog to find the first content of type 'Paragraph'
        let processedBlogs = blogs.map(blog => {
            let paragraph = blog.contents.find(content => content.type === 'Paragraph');
            return {
                slug: blog.slug,
                author: blog.author,
                location: blog.location || 'India',
                title: blog.title,
                featured: blog.featured,
                contents: paragraph
            };
        });
        // Apply pagination
        res.status(200).json(processedBlogs);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal Server Error" });
    }
};





const getAllGSPostSlugs = async (req, res) => {
    try {
        let response = await GSBlogs.find({}).select('slug');
        let reversedRes = response.reverse();

        res.status(200).json(reversedRes);
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

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

const getGSBlog = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await GSBlogs.findOne({ slug })
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

const getArticle = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await Articles.findOne({ slug })
        if (response) {
            res.status(200).json({ response });
        } else {
            res.status(203).json({ msg: "Unable to fetch data." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getGSArticle = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await GSArticles.findOne({ slug })
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
        let reversedRes = response.reverse();

        if (response) {
            res.status(200).json({ response: reversedRes });
        } else {
            res.status(203).json({ msg: "Unable to fetch data." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });

    }
}

const getAllGSArticles = async (req, res) => {
    try {
        // Extract page number from request body with a default value of 1
        const page = parseInt(req.body.page) || 1;
        const limit = 10; // Fixed limit of 10 posts per page
        const skip = (page - 1) * limit;

        // Retrieve articles, in reverse order, with pagination
        let articles = await GSArticles.find({})
            .sort({ _id: -1 }) // Reverse order by default
            .skip(skip)
            .limit(limit);

        if (articles) {
            res.status(200).json({ response: articles });
        } else {
            res.status(203).json({ msg: "Unable to fetch data." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};


const getAllGSArticleSlugs = async (req, res) => {
    try {
        let response = await GSArticles.find({}).select('slug');
        let reversedRes = response.reverse();

        res.status(200).json(reversedRes);
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getVideo = async (req, res) => {
    const { link } = req.body;
    const decodedLink = decodeURIComponent(link)
    try {
        let response = await Videos.findOne({ link: decodedLink })
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

const getAllVideos = async (req, res) => {
    try {
        let response = await Videos.find({})
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

const getGSVideo = async (req, res) => {
    const { id } = req.body;
    try {
        let response = await GSVideos.findOne({ _id: id })
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

const getAllGSVideos = async (req, res) => {
    try {
        let response = await GSVideos.find({})
        let reversedRes = response.reverse();

        if (response) {
            res.status(200).json({ response: reversedRes });
        } else {
            res.status(203).json({ msg: "Unable to fetch data." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });

    }
}

module.exports = { getBlog, getBlogsByPage, getAllPosts, getArticle, getAllArticles, getAllVideos, getVideo, getAllPostSlugs, getAllGSPosts, getGSBlog, getGSArticle, getAllGSArticles, getGSVideo, getAllGSVideos, getAllGSPostSlugs, getAllGSArticleSlugs, getGSBlogCards, getAllGSPdfs, getGSPdf, getGSBlogCardsByPages };