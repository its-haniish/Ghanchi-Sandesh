import React from 'react';
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ blogTo, blogTitle, articleTo, articleTitle, videoTo, videoTitle, pdfTo, pdfTitle }) => {
    return (
        <nav className='w-screen h-[7vh] bg-[#e51a4b] px-4 py-0 shadow'>
            <div className='w-full h-full flex justify-center items-center space-x-2'>
                <NavLink className='px-2 py-[1px] bg-white flex justify-center items-center gap-1 rounded h-fit flex-nowrap' to={blogTo} >
                    {blogTitle !== "All Posts" && <FaPlus color='#dc214c' />}
                    <span className='text-[#e51a4b] text-sm font-bold'>
                        {blogTitle}
                    </span>
                </NavLink>

                <NavLink className='px-2 py-[1px] bg-white flex justify-center items-center gap-1 rounded h-fit flex-nowrap' to={articleTo} >
                    {articleTitle !== "All Articles" && <FaPlus color='#dc214c' />}
                    <span className='text-[#e51a4b] text-sm font-bold'>
                        {articleTitle}
                    </span>
                </NavLink>

                <NavLink className='px-2 py-[1px] bg-white flex justify-center items-center gap-1 rounded h-fit flex-nowrap' to={videoTo} >
                    {videoTitle !== "All Videos" && <FaPlus color='#dc214c' />}
                    <span className='text-[#e51a4b] text-sm font-bold'>
                        {videoTitle}
                    </span>
                </NavLink>

                <NavLink className='px-2 py-[1px] bg-white flex justify-center items-center gap-1 rounded h-fit flex-nowrap' to={pdfTo} >
                    {pdfTitle !== "All Pdfs" && <FaPlus color='#dc214c' />}
                    <span className='text-[#e51a4b] text-sm font-bold'>
                        {pdfTitle}
                    </span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
