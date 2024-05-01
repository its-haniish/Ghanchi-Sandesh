"use client"
import React from 'react';

const VideoPreview = ({ video }) => {
    const { link, description } = video;

    // Modify the YouTube URL to use the embedded URL
    const embeddedLink = link.replace("watch?v=", "embed/");

    return (
        <section className='bg-gray-100 rounded-md py-1 px-2 w-full h-fit' >
            <iframe
                src={embeddedLink}
                width="336"
                height="189"
                // frameborder="0"
                className='rounded-xl z-[100000]'
                aria-controls
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <p className='w-full mt-1 whitespace-normal break-all text-sm font-medium text-justify '>{description}</p>
        </section>
    )
}

export default VideoPreview;
