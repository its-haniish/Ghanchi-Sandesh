"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Menu from './Menu.jsx';
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef()

    const openMenu = () => {
        setShowMenu(prev => !prev)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }

    useEffect(() => {
        // Calculate the height of the navbar
        if (navbarRef.current) {
            const height = navbarRef.current.offsetHeight;
            setNavbarHeight(height);
        }
    }, []);

    return (
        <>
            <nav ref={navbarRef} className='w-screen h-[7vh] bg-[#e51a4b] px-2 py-0 overflow-visible'>

                <div className='w-full h-full flex justify-between items-center'>

                    <Link href="/">
                        <img src="/Ghanchi Sandesh.jpg" alt="Ghanchi Sandesh" className='w-[130px] bg-none border-none' />
                    </Link>

                    <div className='flex justify-end items-center w-[40%]'>

                        <Link className='px-1 bg-white text-[#e51a4b] text-sm
                    font-bold rounded w-fit h-5 text-nowrap' href="/e-sandesh" >
                            इ-संदेश
                        </Link>
                    </div>

                    <button className='flex justify-center items-center w-fit h-full ml-2'>
                        {
                            !showMenu ?
                                <FiMenu color='white' size={42} onClick={openMenu} />
                                : <IoClose color='white' size={42} onClick={closeMenu} />
                        }
                    </button>

                </div >
            </nav >
            {showMenu && <Menu closeMenu={closeMenu} navbarHeight={navbarHeight} />}
        </>
    )
}

export default Navbar