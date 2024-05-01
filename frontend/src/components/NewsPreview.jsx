"use client"
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';


const NewsPreview = ({ post }) => {
    const { slug, location, featured, title, news, createdAt, author } = post;

    const truncatedText = news.substring(0, 170);

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

    const time = getTimePassed(createdAt)


    return (
        <Link href={`/news/${slug}`} className='bg-gray-100 rounded-md py-1 px-2 w-full h-fit' >
            <div className='w-full flex justify-between items-center mb-1'>
                <div className='flex justify-start items-center gap-1 h-[12%]'>
                    <FaLocationDot color='#e51a4b' size={14} />
                    <span className='text-[#e51a4b] text-sm font-bold'>{location}</span>
                </div>
                <p className='text-[#e51a4b] text-sm font-semibold'>By <span className='font-bold'>{author}</span>, {time}</p>
            </div>

            <img src={featured || "/Ghanchi Sandesh.jpg"} alt={featured || ""} className='w-full aspect-video rounded-md shadow' />


            <h2 className='h-fit w-full mt-1 font-bold text-lg text-[blue] text-left'>
                {title}
            </h2>

            <p className='w-full whitespace-normal text-wrap font-normal text-sm text-center'>
                {truncatedText} <span className='text-left font-semibold text-[#e51a4b] text-l'>Read More...</span>
            </p>



        </Link>
    )
}

export default NewsPreview
