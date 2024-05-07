"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { IoShareSocial } from "react-icons/io5";
import { RotatingLines } from 'react-loader-spinner';
import FooterMenu from '@/components/FooterMenu';



const Page = ({ params }) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    const getArticleInfo = async () => {
        let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/get-article`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug: params.slug })
        });
        let result = await res.json();
        if (result?.msg) {
            return alert(result.msg);
        }
        setLoading(false)
        return setData({
            ...result.response
        });
    };

    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    url: url
                });
                console.log('Link shared successfully');
            } catch (error) {
                console.error('Error sharing link:', error);
            }
        } else {
            // Fallback if navigator.share is not available
            try {
                await navigator.clipboard.writeText(url);
                console.log('Link copied to clipboard');
                // Implement your own UI for sharing here
            } catch (error) {
                console.error('Error copying link to clipboard:', error);
            }
        }
    };

    function getTimePassed(utcTimestamp) {
        const currentTime = new Date();
        const providedTime = new Date(utcTimestamp);

        const timeDifference = currentTime - providedTime;
        const secondsDifference = Math.floor(timeDifference / 1000);
        const minutesDifference = Math.floor(secondsDifference / 60);
        const hoursDifference = Math.floor(minutesDifference / 60);
        const daysDifference = Math.floor(hoursDifference / 24);
        const monthsDifference = Math.floor(daysDifference / 30);
        const yearsDifference = Math.floor(monthsDifference / 12);

        if (yearsDifference > 0) {
            return yearsDifference === 1 ? "1 year ago" : `${yearsDifference} years ago`;
        } else if (monthsDifference > 0) {
            return monthsDifference === 1 ? "1 month ago" : `${monthsDifference} months ago`;
        } else if (daysDifference > 0) {
            return daysDifference === 1 ? "1 day ago" : `${daysDifference} days ago`;
        } else if (hoursDifference > 0) {
            return hoursDifference === 1 ? "1 hour ago" : `${hoursDifference} hours ago`;
        } else if (minutesDifference > 0) {
            return minutesDifference === 1 ? "1 minute ago" : `${minutesDifference} minutes ago`;
        } else {
            return secondsDifference === 1 ? "1 second ago" : `${secondsDifference} seconds ago`;
        }
    }

    // const getExtractedImageUrl = (imageUrl) => {
    //     // Extracting the ID from the URL
    //     const idStartIndex = imageUrl.indexOf('/d/') + 3;
    //     const idEndIndex = imageUrl.indexOf('/view');
    //     const fileId = imageUrl.substring(idStartIndex, idEndIndex);

    //     // Constructing the thumbnail URL
    //     const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}`;

    //     return thumbnailUrl;
    // }


    useEffect(() => {
        getArticleInfo()
    }, [])
    return (
        <>
            <Navbar />
            {
                loading ?
                    <div className='flex flex-col gap-3 justify-center items-center w-full h-full mt-[-10vh]'>
                        <RotatingLines width='100' strokeColor='#e51a4b' />
                        <p className='text-2xl text-[#e51a4b] font-bold'>Please wait...</p>
                    </div> :
                    <main className='pt-2 px-5 w-[100vw] overflow-y-scroll mb-14 mt-[50px]'>

                        <h1 className='h-fit font-bold text-xl text-[blue] underline text-wrap text-justify'>
                            {data?.title}
                        </h1>

                        <div className='w-full flex justify-center items-center mt-3'>
                            <img src={data?.featured || "/Ghanchi Sandesh.jpg"} alt={data?.featured} className='w-full rounded-lg aspect-video' />
                        </div>

                        <p className='w-full mt-1 text-wrap whitespace-normal text-lg text-center font-normal'>
                            {data?.article}
                        </p>

                        <div className='w-full flex flex-row justify-between items-center mt-6 mb-9'>

                            <button className='bg-[#e51a4b]  py-[2px] px-6 rounded flex justify-center items-center gap-1 ml-2'
                                onClick={handleShare}>
                                <IoShareSocial color='white' />
                                <span className='text-white text-l font-bold '>शेयर</span>
                            </button>

                            <p className='text-[#e51a4b] py-[2px] text-sm font-semibold bg-none px-6 rounded text-right w-fit'>By <span className='font-bold'>{data?.author}</span>, {getTimePassed(data?.createdAt)}</p>

                        </div>

                    </main>}
            <FooterMenu />
        </>
    );
};


export default Page;
