import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import AddContent from '../components/AddContent.jsx';
import compressImage from '../actions/compressImage.js';

const AddArticle = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        featured: '',
        author: '',
        slug: '',
        article: ''
    });
    const navigate = useNavigate();

    const readFileAsUrl = async (file) => {
        const compressedFile = await compressImage(file);
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/create-gs-article`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData })
        });
        const result = await res.json();
        console.log(result);
        if (result?.msg === 'Article created successfully.') {
            alert(result.msg);
            setLoading(false);
            return navigate('/articles');
        } else {
            alert(result.msg);
            setLoading(false);
        }
    }

    return (
        <>
            <Navbar
                blogTo="/add-post"
                blogTitle="Add Post"
                articleTo="/articles"
                articleTitle="All Articles"
                videoTo="/add-video"
                videoTitle="Add Video"
                pdfTo="/add-pdf"
                pdfTitle="Add Pdf"
            />
            <form className="flex flex-col w-full px-2 justify-start items-center gap-3 overflow-scroll" onSubmit={!loading ? handleSubmit : e => e.preventDefault()}>
                <h2 className="text-xl mt-1 font-bold">CREATE ARTICLE</h2>
                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">TITLE:</label>
                    <textarea
                        type="text"
                        placeholder="Enter title here..."
                        className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md"
                        name="title"
                        onChange={handleChange}
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
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">FEATURED IMAGE:</label>
                    <div className="w-full flex justify-center items-center">
                        {formData.featured && (
                            <img src={formData.featured} alt="Image will show here." className="w-[50%] rounded-lg aspect-video" />
                        )}
                    </div>
                    <input
                        type="file"
                        className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md"
                        name="featured"
                        accept="image/*"
                        onChange={async (e) => {
                            const base64String = await readFileAsUrl(e.target.files[0]);
                            setFormData({ ...formData, featured: base64String });
                        }}
                        required
                    />
                </div>
                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">AUTHOR:</label>
                    <input
                        type="text"
                        placeholder="Enter author here..."
                        className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md"
                        name="author"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">ARTICLE:</label>
                    <textarea
                        type="text"
                        placeholder="Enter author here..."
                        className="bg-gray-100 w-[80%] text-center h-[40vh] px-2 py-1 text-lg mt-1 rounded-md"
                        name="article"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="mt-1 bg-[#e51a4b] text-white text-lg py-1 px-4 rounded active:bg-slate-600 w-28 h-10 flex justify-center items-center font-bold mb-6">
                    {!loading ? 'POST' : <RotatingLines height="30" width="30" strokeColor="white" />}
                </button>
            </form>
        </>
    );
};

export default AddArticle;
