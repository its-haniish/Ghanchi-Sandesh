import React, { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import { RotatingLines } from 'react-loader-spinner';
import ImageAddComp from "../../components/ImageAddComp.jsx"
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState({})
    const [formData, setFormData] = useState({
        title: '',
        featured: '',
        news: '',
        location: '',
    });
    const navigate = useNavigate()

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        let imagesArray = Object.values(images);
        const filteredImagesArray = imagesArray.filter(item => item !== "");
        const data = {
            ...formData, images: filteredImagesArray
        }
        try {
            let res = await fetch(`${process.env.REACT_APP_BASE_URL}/create-post`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            let result = await res.json()
            setLoading(false)
            alert(result?.msg)
            return navigate("/")
        } catch (error) {
            setLoading(false)
            alert(error)
            return navigate("/")
        }

    };

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
                <h2 className="text-xl mt-1 font-bold">CREATE POST</h2>

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

                <div className='flex flex-col justify-start items-center w-full mt-2 h-fit'>
                    <label className='font-semibold'>FEATURED IMAGE:</label>
                    <input
                        type="text"
                        placeholder='Enter link here...'
                        className='bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md'
                        name='featured'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='flex flex-col justify-start items-center w-full mt-2 h-fit'>
                    <label className='font-semibold'>NEWS LOCATION:</label>
                    <input
                        type="text"
                        placeholder='Enter location here...'
                        className='bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md'

                        name='location'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='flex flex-col justify-start items-center w-full mt-2 h-fit'>
                    <label className='font-semibold'>AUTHOR:</label>
                    <input
                        type="text"
                        placeholder='Enter location here...'
                        className='bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md'

                        name='author'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='flex flex-col justify-start items-center w-full mt-2 h-fit'>
                    <label className='font-semibold'>NEWS:</label>
                    <textarea
                        type="text"
                        placeholder='Enter news here...'
                        className='bg-gray-100 w-[80%] text-center px-2 py-1 text-lg mt-1 h-[20vh] rounded-md'

                        name='news'
                        onChange={handleChange}
                        required
                    />
                </div>

                <ImageAddComp images={images} setImages={setImages} />

                <button type='submit' className="mt-1 bg-[#e51a4b] text-white text-lg py-1 px-4 rounded active:bg-slate-600 w-28 h-10 flex justify-center items-center font-bold mb-6">
                    {!loading ? 'POST' : <RotatingLines height="30" width="30" strokeColor="white" />}
                </button>
            </form>
        </>
    );
};

export default AddPost;
