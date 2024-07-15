import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import { RotatingLines } from 'react-loader-spinner';
import { useParams, useNavigate } from 'react-router-dom';

const EditVideo = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        link: '',
        description: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const getVideoInfo = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/get-gs-video`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            const result = await res.json();
            if (result?.msg) {
                alert(result.msg);
                setLoading(false);
                return navigate('/');
            }
            const { link, description } = result.response;
            setFormData({ link, description });
            setLoading(false);
        } catch (error) {
            console.error("Error fetching video data:", error);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = { ...formData, id };
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/update-gs-video`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ video: data })
            });
            const result = await res.json();
            setLoading(false);
            alert(result?.msg);
            if (result.msg === 'Video updated successfully.') {
                return navigate('/videos');
            }
        } catch (error) {
            console.error("Error updating video:", error);
            setLoading(false);
        }
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
                videoTitle="All Videos"
                pdfTo='/pdfs'
                pdfTitle='All Pdfs'
            />
            <form className="flex flex-col w-full px-2 justify-start items-center gap-3 overflow-scroll" onSubmit={!loading ? handleSubmit : e => e.preventDefault()}>
                <h2 className="text-xl mt-1 font-bold">EDIT VIDEO</h2>
                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">LINK:</label>
                    <textarea
                        type="text"
                        placeholder="Enter link here..."
                        className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">DESCRIPTION:</label>
                    <textarea
                        type="text"
                        placeholder="Enter description here..."
                        className="bg-gray-100 w-[80%] text-center h-[40vh] px-2 py-1 text-lg mt-1 rounded-md"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="mt-1 bg-[#e51a4b] text-white text-lg py-1 px-4 rounded active:bg-slate-600 w-28 h-10 flex justify-center items-center font-bold mb-6">
                    {!loading ? 'UPDATE' : <RotatingLines height="30" width="30" strokeColor="white" />}
                </button>
            </form>
        </>
    );
};

export default EditVideo;
