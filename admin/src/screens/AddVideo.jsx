import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const AddVideo = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        link: '',
        description: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/create-gs-video`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData })
        });
        const result = await res.json();
        console.log(result);
        if (result?.msg === 'Video created successfully.') {
            alert(result.msg);
            setLoading(false);
            return navigate('/videos');
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
                articleTo="/add-article"
                articleTitle="Add Article"
                videoTo="/videos"
                videoTitle="All Videos"
                pdfTo="/add-pdf"
                pdfTitle="Add Pdf"
            />
            <form className="flex flex-col w-full px-2 justify-start items-center gap-3 overflow-scroll" onSubmit={!loading ? handleSubmit : e => e.preventDefault()}>
                <h2 className="text-xl mt-1 font-bold">CREATE VIDEO</h2>
                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">LINK:</label>
                    <textarea
                        type="text"
                        placeholder="Enter title here..."
                        className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md"
                        name="link"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">DESCRIPTION:</label>
                    <textarea
                        type="text"
                        placeholder="Enter author here..."
                        className="bg-gray-100 w-[80%] text-center h-[40vh] px-2 py-1 text-lg mt-1 rounded-md"
                        name="description"
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

export default AddVideo;
