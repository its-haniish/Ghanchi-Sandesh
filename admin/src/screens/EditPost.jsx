import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import { RotatingLines } from 'react-loader-spinner';
import { useParams, useNavigate } from 'react-router-dom';
import AddContent from '../components/AddContent.jsx';
import compressImage from '../actions/compressImage.js';

const EditPost = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false);
    const [contents, setContents] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        featured: '',
        author: '',
        slug: ''
    });
    const navigate = useNavigate();

    const readFileAsUrl = async (file) => {
        const compressedFile = await compressImage(file);
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const getPostInfo = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/get-gs-post`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug })
            });
            const result = await res.json();
            if (result?.msg) {
                alert(result.msg);
                setLoading(false);
                return navigate('/');
            }
            const { title, featured, author, slug: postSlug, contents } = result.response;
            setFormData({ title, featured, author, slug: postSlug });
            setContents(contents);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching post data:", error);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = { ...formData, contents };
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/update-gs-post`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug, post: data })
            });
            const result = await res.json();
            setLoading(false);
            alert(result?.msg);
            if (result.msg === 'Post updated successfully.') {
                return navigate('/');
            }
        } catch (error) {
            console.error("Error updating post:", error);
            setLoading(false);
        }
    };

    const compressAllImages = async () => {
        setLoading(true);
        try {
            // Compress featured image
            if (formData.featured) {
                const featuredFile = await fetch(formData.featured).then(r => r.blob());
                const compressedFeatured = await compressImage(featuredFile);
                const compressedFeaturedUrl = await readFileAsUrl(compressedFeatured);
                setFormData(prev => ({ ...prev, featured: compressedFeaturedUrl }));
            }

            // Compress images in contents
            const newContents = await Promise.all(contents.map(async (item) => {
                if (item.type === 'Image') {
                    const imageFile = await fetch(item.content).then(r => r.blob());
                    const compressedImage = await compressImage(imageFile);
                    const compressedImageUrl = await readFileAsUrl(compressedImage);
                    return { ...item, content: compressedImageUrl };
                }
                return item;
            }));

            setContents(newContents);
            setLoading(false);
            alert('All images have been compressed!');
        } catch (error) {
            console.error("Error compressing images:", error);
            setLoading(false);
            alert('Error compressing images. Please try again.');
        }
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
                videoTitle="All Videos"
                pdfTo='/pdfs'
                pdfTitle='All Pdfs'
            />
            <form className="flex flex-col w-full px-2 justify-start items-center gap-3 overflow-scroll" onSubmit={!loading ? handleSubmit : e => e.preventDefault()}>
                <h2 className="text-xl mt-1 font-bold">EDIT POST</h2>

                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">TITLE:</label>
                    <textarea
                        placeholder="Enter title here..."
                        className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
                    <label className="font-semibold">SLUG:</label>
                    <input
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
                    <label className='font-semibold'>AUTHOR:</label>
                    <input
                        placeholder='Enter author here...'
                        className='bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-1 rounded-md'
                        name='author'
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='flex flex-col justify-start items-center w-full mt-2 h-fit'>
                    <label className='font-semibold'>CONTENTS:</label>
                    <div className='w-full flex flex-col gap-2 mt-2 justify-start items-center'>
                        {contents.map(({ type, content }, index) => {
                            if (type === 'Image') {
                                return <img key={index} src={content} alt="content" className="w-[50%] rounded-lg aspect-video" onClick={() => setContents(contents.filter((_, i) => i !== index))} />;
                            } else if (type === 'Heading') {
                                return <h2 key={index} className="text-xl font-bold text-center" onClick={() => setContents(contents.filter((_, i) => i !== index))}>{content}</h2>;
                            } else {
                                return <p key={index} className="text-base text-center" onClick={() => setContents(contents.filter((_, i) => i !== index))}>{content}</p>;
                            }
                        })}
                    </div>
                    <AddContent contents={contents} setContents={setContents} readFileAsUrl={readFileAsUrl} />
                </div>
                <button 
                    type='button' 
                    onClick={compressAllImages} 
                    className="mt-1 bg-blue-500 text-white text-lg py-1 px-4 rounded active:bg-blue-600 w-auto h-10 flex justify-center items-center font-bold"
                    disabled={loading}
                >
                    Compress Images
                </button>
                <button type='submit' className="mt-1 bg-[#e51a4b] text-white text-lg py-1 px-4 rounded active:bg-slate-600 w-28 h-10 flex justify-center items-center font-bold mb-6">
                    {!loading ? 'UPDATE' : <RotatingLines height="30" width="30" strokeColor="white" />}
                </button>
            </form>
        </>
    );
};

export default EditPost;
