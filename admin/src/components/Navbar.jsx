import React from 'react';
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navbar = ({ blogTo, blogTitle, articleTo, articleTitle, videoTo, videoTitle }) => {

    return (
        <>
            <nav className='w-screen h-[7vh] bg-[#e51a4b] px-4 py-0 shadow'>

                <div className='w-full h-full flex justify-between items-center'>

                    <NavLink to="/" className="mt-[-4px]">
                        <img src="/Ghanchi Sandesh.jpg" alt="Ghanchi Sandesh" className='w-[60px] bg-none border-none' />
                    </NavLink>

                    <NavLink className='px-2 py-[1px] bg-white flex justify-center items-center gap-1 rounded w-fit h-5 flex-nowrap' to={blogTo} >
                        {
                            blogTitle === "All Posts" ? null
                                : <FaPlus color='#dc214c' />
                        }

                        <span className=' text-[#e51a4b] text-sm font-bold text-nowrap'>
                            {blogTitle}
                        </span>

                    </NavLink>

                    <NavLink className='px-2 py-[1px] bg-white flex justify-center items-center gap-1 rounded w-fit h-5 flex-nowrap' to={articleTo} >
                        {
                            articleTitle === "All Articles" ? null
                                : <FaPlus color='#dc214c' />
                        }

                        <span className=' text-[#e51a4b] text-sm font-bold text-nowrap'>
                            {articleTitle}
                        </span>

                    </NavLink>

                    <NavLink className='px-2 py-[1px] bg-white flex justify-center items-center gap-1 rounded w-fit h-5 flex-nowrap' to={videoTo} >
                        {
                            videoTitle === "All Videos" ? null
                                : <FaPlus color='#dc214c' />
                        }

                        <span className=' text-[#e51a4b] text-sm font-bold text-nowrap'>
                            {videoTitle}
                        </span>

                    </NavLink>



                </div >


            </nav >
        </>
    )
}

export default Navbar