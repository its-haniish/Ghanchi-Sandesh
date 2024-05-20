"use client"
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';


const NewsPreview = ({ post }) => {
    const { slug, location, featured, title, news, createdAt, author } = post;

    const truncatedText = news.substring(0, 170);

    return (
        <Link href={`/news/${slug}`} className='bg-gray-100 rounded-md py-1 px-2 w-full h-fit' >
            <div className='w-full flex justify-between items-center mb-1'>
                <div className='flex justify-start items-center gap-1 h-[12%]'>
                    <FaLocationDot color='#e51a4b' size={14} />
                    <span className='text-[#e51a4b] text-sm font-bold'>{location}</span>
                </div>
                <p className='text-[#e51a4b] text-sm font-semibold'>प्रेषक: <span className='font-bold'>{author}</span></p>
            </div>

            <img src={featured || "/Ghanchi Sandesh.jpg"} alt={featured || "Ghanchi Sandesh featured"} className='w-full aspect-video rounded-md shadow' />


            <h2 className='h-fit w-full mt-1 font-bold text-lg text-[blue] text-left underline'>
                {title}
            </h2>

            <p className='w-full whitespace-normal text-wrap font-normal text-sm text-center'>
                {truncatedText} <span className='text-left font-semibold text-[#e51a4b] text-l'>आगे पढ़े...</span>
            </p>



        </Link>
    )
}

export default NewsPreview
