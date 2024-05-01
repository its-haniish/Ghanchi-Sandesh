// EditPost.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EditArticle = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        featured: '',
        article: '',
        slug: '',
        author: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const getArticleInfo = async () => {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/get-article`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug })
        });
        let result = await res.json();
        if (result?.msg) {
            alert(result.msg);
            setLoading(false);
            return navigate("/articles");
        }
        setLoading(false);
        return setFormData({
            ...result.response
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/update-article`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug, article: formData })
        })
        let result = await res.json()
        setLoading(false)
        alert(result?.msg)
        return navigate("/articles")
    };

    useEffect(() => {
        getArticleInfo();
    }, []);

    return (
        <>
            <Navbar
                blogTo="/"
                blogTitle="All Posts"
                articleTo="/articles"
                articleTitle="All Articles"
                videoTo="/videos"
                videoTitle="All Videos" />

            <form className="flex flex-col w-full px-2 justify-start items-center gap-3 overflow-scroll" onSubmit={handleSubmit}>
                <h2 className="text-xl mt-1 font-bold">EDIT ARTICLE</h2>

                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">TITLE:</label>
                    <textarea
                        type="text"
                        placeholder="Enter title here..."
                        className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md"
                        name="title"
                        onChange={handleChange}
                        value={formData.title}
                        required
                    />
                </div>

                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">SLUG:</label>
                    <input
                        type="text"
                        placeholder="Enter slug here..."
                        className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='flex flex-col justify-start items-center w-full mt-2 h-fit'>
                    <label className='font-semibold'>FEATURED IMAGE:</label>
                    <input
                        type="text"
                        placeholder='Enter link here...'
                        className='bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md'
                        name='featured'
                        onChange={handleChange}
                        value={formData.featured}
                        required
                    />
                </div>

                <div className='flex flex-col justify-start items-center w-full mt-2 h-fit'>
                    <label className='font-semibold'>AUTHOR:</label>
                    <input
                        type="text"
                        placeholder='Enter location here...'
                        className='bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md'
                        value={formData.author}
                        name='author'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='flex flex-col justify-start items-center w-full mt-2 h-fit'>
                    <label className='font-semibold'>ARTICLE:</label>
                    <textarea
                        type="text"
                        placeholder='Enter news here...'
                        className='bg-gray-100 w-[80%] text-center px-2 py-1 text-lg mt-1 h-[30vh] rounded-md'
                        value={formData.article}
                        name='article'
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type='submit' className="mt-1 bg-[#e51a4b] text-white text-lg py-1 px-4 rounded active:bg-slate-600 w-28 h-10 flex justify-center items-center font-bold mb-6">
                    {!loading ? 'UPDATE' : <RotatingLines height="30" width="30" strokeColor="white" />}
                </button>
            </form>
        </>
    );
};

export default EditArticle;
