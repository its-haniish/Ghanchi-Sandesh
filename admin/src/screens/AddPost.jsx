import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import AddContent from '../components/AddContent.jsx';
import compressImage from '../actions/compressImage.js';

const AddPost = () => {
    const [loading, setLoading] = useState(false);
    const [contents, setContents] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        featured: '',
        author: '',
        slug: '',
        location: ''
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
            reader.readAsDataURL(compressedFile);
        });
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { ...formData, contents };
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/create-gs-post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        console.log(result);
        if (result?.msg === 'Post created successfully.') {
            alert(result.msg);
            setLoading(false);
            return navigate('/');
        } else {
            alert(result.msg);
            setLoading(false);
        }
    }

    return (
        <>
            <Navbar
                blogTo="/"
                blogTitle="All Posts"
                articleTo="/add-article"
                articleTitle="Add Article"
                videoTo="/add-video"
                videoTitle="Add Video"
                pdfTo="/add-pdf"
                pdfTitle="Add Pdf"
            />
            <form className="flex flex-col w-full px-2 justify-start items-center gap-3 overflow-scroll" onSubmit={!loading ? handleSubmit : e => e.preventDefault()}>
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
                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">Location</label>
                    <input
                        type="text"
                        placeholder="Enter Location here..."
                        className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md"
                        name="location"
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
                    <label className="font-semibold">CONTENTS:</label>
                    <div className="w-full flex flex-col gap-2 mt-2 justify-start items-center">
                        {contents.map(({ type, content }, index) => {
                            if (type === 'Image') {
                                return <img onClick={() => {
                                    setContents(contents.filter((_, i) => i !== index));
                                }} key={index} src={content} alt="content" className="w-[50%] rounded-lg aspect-video" />;
                            } else if (type === 'Heading') {
                                return <h2 key={index} className="text-xl font-bold text-center"
                                    onClick={() => {
                                        setContents(contents.filter((_, i) => i !== index));
                                    }}>{content}</h2>;
                            } else {
                                return <p key={index} className="text-base text-center w-[90%] h-fit text-balance break-words"
                                    onClick={() => {
                                        setContents(contents.filter((_, i) => i !== index));
                                    }}>{content}</p>;
                            }
                        })}
                    </div>
                    <AddContent contents={contents} setContents={setContents} readFileAsUrl={readFileAsUrl} />
                </div>
                <button type="submit" className="mt-1 bg-[#e51a4b] text-white text-lg py-1 px-4 rounded active:bg-slate-600 w-28 h-10 flex justify-center items-center font-bold mb-6">
                    {!loading ? 'POST' : <RotatingLines height="30" width="30" strokeColor="white" />}
                </button>
            </form>
        </>
    );
};

export default AddPost;
