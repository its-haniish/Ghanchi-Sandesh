"use client"
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';


const ArticlePreview = ({ post }) => {
    const { slug, featured, title, article } = post;

    const truncatedText = article.substring(0, 110);

    const getExtractedImageUrl = (imageUrl) => {
        // Extracting the ID from the URL
        const idStartIndex = imageUrl.indexOf('/d/') + 3;
        const idEndIndex = imageUrl.indexOf('/view');
        const fileId = imageUrl.substring(idStartIndex, idEndIndex);

        // Constructing the thumbnail URL
        const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}`;

        return thumbnailUrl;
    }

    
    return (
        <Link href={`/articles/${slug}`} className='bg-gray-100 rounded-md py-1 px-2 w-full h-fit' >

            <h2 className='h-fit font-bold text-l text-[blue] underline text-wrap whitespace-normal text-justify'>
                {title}
            </h2>

            <div className='flex justify-start items-center fit gap-2 mb-1'>

                <p className='w-full whitespace-normal text-wrap font-normal text-sm text-left'>
                    {truncatedText} <span className='text-left font-semibold text-[#e51a4b] text-l'>आगे पढ़े...</span>
                </p>

                <img src={getExtractedImageUrl(featured)} alt={getExtractedImageUrl(featured)} className='w-[200px] h-[90px] rounded-md aspect-video' />

            </div>
        </Link>
    )
}

export default ArticlePreview