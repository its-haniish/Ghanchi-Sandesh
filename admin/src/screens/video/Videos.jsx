import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar.jsx';
import VideoItem from '../../components/VideoItem.jsx';
import { RotatingLines } from "react-loader-spinner"

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false)

    const getAllVideos = async () => {
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-all-videos`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" }
        });

        const result = await response.json();

        if (result?.msg === "Unable to fetch data.") {
            return alert(result.msg)
        }
        setLoading(false)
        setVideos(result.response.reverse())
    }


    useEffect(() => {
        getAllVideos()
    }, [])

    return (
        <>
            <Navbar
                blogTo="/"
                blogTitle="All Posts"
                articleTo="/articles"
                articleTitle="All Articles"
                videoTo="/add-video"
                videoTitle="Add Video"
            />
            {
                loading ?
                    <div className='flex flex-col gap-3 justify-center items-center w-full h-full mt-[20vh]'>
                        <RotatingLines width='100' strokeColor='#e51a4b' />
                        <p className='text-2xl text-[#e51a4b] font-bold'>Please wait...</p>
                    </div>
                    :
                    <main className='w-full mb-10'>

                        <h2 className='text-center text-bold text-xl font-["Tilt Neon"] mt-3'>Total Videos - {videos?.length}</h2>
                        {
                            videos?.map((video, index) => {
                                const { _id, link, description } = video;
                                return (
                                    <VideoItem key={_id} index={index} link={link} description={description} setVideos={setVideos} />
                                )
                            })
                        }
                    </main>}
        </>
    )
}

export default Videos