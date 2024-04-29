import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Menu from './Menu';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(true);
    }

    const closeMenu = () => {
        setShowMenu(false);
    }

    return (
        <>
            <nav className='w-screen h-[7vh] bg-[#e51a4b] px-2 py-0 relative overflow-visible'>

                <div className='w-full h-full flex justify-between items-center'>

                    <Link href="/">
                        <img src="/Ghanchi Sandesh.jpg" alt="Ghanchi Sandesh" className='w-[130px] bg-none border-none' />
                    </Link>

                    <div className='flex justify-end items-center w-[40%]'>

                        <Link className='px-1 bg-white text-[#e51a4b] text-sm font-bold rounded w-fit h-5 text-nowrap' href="/e-sandesh">
                            इ-संदेश
                        </Link>
                    </div>

                    <button className='flex justify-center items-center w-fit h-full ml-2' onClick={showMenu ? closeMenu : openMenu}>
                        {showMenu ? <IoClose color='white' size={42} /> : <FiMenu color='white' size={42} />}
                    </button>

                </div>

            </nav>

            {showMenu && <Menu closeMenu={closeMenu} />}
        </>
    )
}

export default Navbar;
