// EditPost.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import { RotatingLines } from 'react-loader-spinner';
import ImageAddComp from "../../components/ImageAddComp.jsx"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EditPost = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        featured: '',
        news: '',
        location: '',
        slug: '',
        author: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const readFileAsUrl = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    const getPostInfo = async () => {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/get-post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug })
        });
        let result = await res.json();
        if (result?.msg) {
            alert(result.msg);
            setLoading(false);
            return navigate("/");
        }
        setLoading(false);
        setImages(result.response?.images);

        // Set formData including the fetched data
        setFormData({
            title: result.response.title,
            featured: result.response.featured, // Include the value of the featured image
            news: result.response.news,
            location: result.response.location,
            slug: result.response.slug,
            author: result.response.author
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        let imagesArray = Object.values(images);
        const filteredImagesArray = imagesArray.filter(item => item !== "");
        const post = {
            ...formData, images: filteredImagesArray
        }

        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/update-post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug, post })
        })
        let result = await res.json()
        setLoading(false)
        alert(result?.msg)
        return navigate("/")
    };

    useEffect(() => {
        getPostInfo();
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
                <h2 className="text-xl mt-1 font-bold">EDIT POST</h2>

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
                    <div className='w-screen flex justify-center items-center'>
                        {formData.featured && (
                            <img src={formData.featured} alt="Featured Image" className="w-[50%] rounded-lg aspect-video" />
                        )}
                    </div>
                    <input
                        type="file"
                        placeholder='Enter link here...'
                        className='bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md'
                        name='featured'
                        accept='image/*'
                        onChange={async (e) => {
                            const base64String = await readFileAsUrl(e.target.files[0]);
                            setFormData({ ...formData, featured: base64String });
                        }}
                    />
                </div>


                <div className='flex flex-col justify-start items-center w-full mt-2 h-fit'>
                    <label className='font-semibold'>NEWS LOCATION:</label>
                    <input
                        type="text"
                        placeholder='Enter location here...'
                        className='bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md'
                        value={formData.location}
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
                        value={formData.author}
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
                        value={formData.news}
                        name='news'
                        onChange={handleChange}
                        required
                    />
                </div>

                <ImageAddComp images={images} setImages={setImages} readFileAsUrl={readFileAsUrl} />

                <button type='submit' className="mt-1 bg-[#e51a4b] text-white text-lg py-1 px-4 rounded active:bg-slate-600 w-28 h-10 flex justify-center items-center font-bold mb-6">
                    {!loading ? 'UPDATE' : <RotatingLines height="30" width="30" strokeColor="white" />}
                </button>
            </form>
        </>
    );
};

export default EditPost;
