"use client"
import React, { useState } from 'react';
import { FaRegPlayCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Menu from './Menu.jsx';
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <>
            <nav className='w-screen h-[7vh] bg-[#e51a4b] px-2 py-0'>

                <div className='w-full h-full flex justify-between items-center'>

                    <Link href="/">
                        <img src="/Ghanchi Sandesh.jpg" alt="Ghanchi Sandesh" className='w-[130px] bg-none border-none' />
                    </Link>

                    <div className='flex justify-end items-center gap-2 w-[60%]'>

                        <Link className='px-1 bg-white text-[#e51a4b] text-sm
                    font-bold rounded w-fit h-5 text-nowrap' href="/e-sandesh" >
                            इ-संदेश
                        </Link>

                        <Link className='px-2 py-[1px] bg-white flex justify-center items-center gap-1 rounded w-fit h-5 flex-nowrap' href="/" >

                            <span className=' text-[#e51a4b] text-sm font-bold text-nowrap'>
                                विडियो-न्यूज़
                            </span>

                            <FaRegPlayCircle color='#dc214c' />

                        </Link>
                    </div>

                    <button className='flex justify-center items-center w-fit h-full ml-2' onClick={toggleMenu}>
                        {
                            !showMenu ?
                                <FiMenu color='white' size={42} />
                                : <IoClose color='white' size={42} />
                        }
                    </button>

                </div >


            </nav >
            {showMenu && <Menu />}
        </>
    )
}

export default Navbar