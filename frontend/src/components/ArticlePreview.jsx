"use client"
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';


const ArticlePreview = ({ post }) => {
    const { slug, featured, title, article } = post;

    const truncatedText = article.substring(0, 110);

    return (
        <Link href={`/articles/${slug}`} className='bg-gray-100 rounded-md py-1 px-2 w-full h-[21vh]' >

            <h2 className='h-[15%] font-extrabold text-l text-[blue] underline whitespace-nowrap overflow-ellipsis'>
                {title}
            </h2>

            <div className='flex justify-start items-center h-[70%] mt-1 gap-2'>

                <p className='w-[100%] h-full overflow-hidden overflow-ellipsis text-sm font-medium text-justify '>
                    {truncatedText}...
                </p>

                <img src={featured || "/Ghanchi Sandesh.jpg"} alt={featured || ''} className='w-[200px] h-[90px] rounded-md' />

            </div>
        </Link>
    )
}

export default ArticlePreview