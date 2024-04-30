// EditPost.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditVideo = () => {
    const { encodedLink } = useParams();
    const [link] = useState(decodeURIComponent(encodedLink))
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        link: '',
        description: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const getVideoInfo = async () => {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/get-video`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ link: encodedLink })
        });
        let result = await res.json();
        if (result?.msg) {
            alert(result.msg);
            setLoading(false);
            return navigate("/videos");
        }
        setLoading(false);
        return setFormData({
            ...result.response
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/update-video`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ video: formData })
        })
        let result = await res.json()
        setLoading(false)
        alert(result?.msg)
        return navigate("/videos")
    };

    useEffect(() => {
        getVideoInfo();
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
                <h2 className="text-xl mt-1 font-bold">EDIT VIDEO</h2>

                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">LINK:</label>
                    <textarea
                        type="text"
                        placeholder="Enter title here..."
                        className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md"
                        name="link"
                        onChange={handleChange}
                        value={formData.link}
                        required
                    />
                </div>

                <div className='flex flex-col justify-start items-center w-full mt-2 h-fit'>
                    <label className='font-semibold'>DESCRIPTION:</label>
                    <textarea
                        type="text"
                        placeholder='Enter news here...'
                        className='bg-gray-100 w-[80%] text-center px-2 py-1 text-lg mt-1 h-[40vh] rounded-md'
                        value={formData.description}
                        name='description'
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

export default EditVideo;
