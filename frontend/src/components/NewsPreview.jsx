"use client"
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';


const NewsPreview = ({ post }) => {
    const { slug, location, featured, title, news } = post;

    const truncatedText = news.substring(0, 150);

    return (
        <Link href={`/news/${slug}`} className='bg-gray-100 rounded-md py-1 px-2 w-full h-[21vh]' >

            <div className='flex justify-start items-center gap-1 h-[12%]'>
                <FaLocationDot color='#e51a4b' size={14} />
                <span className='text-[#e51a4b] text-sm font-bold'>{location}</span>
            </div>

            <h2 className='h-[15%] font-extrabold text-l text-[blue] underline whitespace-nowrap overflow-ellipsis'>
                ा{title}
            </h2>

            <div className='flex justify-start items-center h-[70%] mt-1 gap-2'>

                <p className='w-[100%] h-full overflow-hidden overflow-ellipsis text-sm font-medium text-justify '>
                    {truncatedText}...
                </p>

                <img src={featured || "/Ghanchi Sandesh.jpg"} alt="" className='w-[200px] h-[90px] rounded-md' />

            </div>
        </Link>
    )
}

export default NewsPreview