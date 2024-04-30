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
                    <main className='pt-2 px-5 w-[100vw] overflow-y-scroll mb-24'>

                        <h2 className='h-[16%] font-extrabold text-l text-[blue] underline text-wrap text-justify'>
                            {data?.title}
                        </h2>

                        <div className='w-full flex justify-center items-center mt-3'>
                            <img src={data?.featured || "/Ghanchi Sandesh.jpg"} alt={data?.featured} className='w-[90%] rounded-lg' />
                        </div>

                        <p className='text-justify text-sm font-medium mt-3'>
                            {data?.article}
                        </p>

                        <div className='flex justify-center items-center w-full mt-3'>
                            <button className='bg-[#e51a4b]  py-[2px] px-6 rounded mb-9 flex justify-center items-center gap-1'
                                onClick={handleShare}>
                                <IoShareSocial color='white' />
                                <span className='text-white text-l font-bold '>शेयर</span>
                            </button>
                        </div>

                    </main>}
            <FooterMenu />
        </>
    );
};


export default Page;
