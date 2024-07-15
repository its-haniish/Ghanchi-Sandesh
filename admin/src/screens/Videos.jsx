import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { RotatingLines } from "react-loader-spinner";
import VideoItem from '../components/VideoItem'

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-all-gs-videos`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" }
            });

            let result = await response.json();
            result = result.response;
            console.log("Fetched videos:", result);

            if (response.status === 200) {
                setVideos(result.reverse());
            } else {
                alert(result.msg || "Error fetching posts");
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
            alert("An error occurred while fetching posts. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <>
            <Navbar
                blogTo="/"
                blogTitle="All Posts"
                articleTo="/articles"
                articleTitle="All Articles"
                videoTo="/add-video"
                videoTitle="Add Videos"
                pdfTo='/pdfs'
                pdfTitle='All Pdfs'
            />
            {loading ? (
                <div className='flex flex-col gap-3 justify-center items-center w-full h-full mt-[20vh]'>
                    <RotatingLines width='100' strokeColor='#e51a4b' />
                    <p className='text-2xl text-[#e51a4b] font-bold'>Please wait...</p>
                </div>
            ) : (
                <main className='w-full mb-10'>
                    <h2 className='text-center text-bold text-xl font-["Tilt Neon"] mt-3'>Total Videos - {videos.length}</h2>
                    {videos.map((post, index) => {
                        const { _id, link, description } = post;
                        return (
                            <VideoItem
                                key={_id}
                                index={index}
                                id={_id}
                                link={link}
                                description={description}
                                setVideos={setVideos}
                            />
                        );
                    })}
                </main>
            )}
        </>
    );
}

export default Videos;
