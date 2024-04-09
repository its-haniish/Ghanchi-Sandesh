"use client"
import React, { useRef, useEffect } from 'react';
import Link from "next/link";

const Menu = ({ closeMenu }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, closeMenu]);

    return (
        <section ref={menuRef} className='absolute bottom-[-28.2vh] left-0 w-full h-fit menu-bar-style shadow shadow-red-300'>
            <div className='w-full flex flex-col justify-start items-center gap-3 mt-3'>
                <Link href="/" onClick={closeMenu} className='text-center text-white text-xl font-bold'>Home</Link>
                <Link href="/" onClick={closeMenu} className='text-center text-white text-xl font-bold'>About Us</Link>
                <Link href="/" onClick={closeMenu} className='text-center text-white text-xl font-bold'>Contact Us</Link>
            </div>

            <ul className='w-full flex justify-center item gap-5 mt-12'>
                <li >
                    <img src='/facebook.png' alt='ghanchi sandesh facebook link' className='rounded w-12' />
                </li>
                <li>
                    <img src='/twitter.png' alt='ghanchi sandesh facebook link' className=' rounded w-12' />
                </li>
                <li>
                    <img src='/instagram.png' alt='ghanchi sandesh facebook link' className='rounded w-12' />
                </li>
                <li>
                    <img src='/whatsapp.png' alt='ghanchi sandesh facebook link' className='rounded w-12' />
                </li>
            </ul>
        </section>
    )
}

export default Menu;
