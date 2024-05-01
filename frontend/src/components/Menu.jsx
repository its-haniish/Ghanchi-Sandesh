import React, { useRef, useEffect, useState } from 'react';
import Link from "next/link";

const Menu = ({ closeMenu, showMenu }) => {
    const menuRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isTouchScrolling, setIsTouchScrolling] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        }

        function handleScroll() {
            setIsScrolling(true); // Set scrolling to true when scroll occurs
        }

        function handleTouchMove() {
            setIsTouchScrolling(true); // Set touch scrolling to true when touch scroll occurs
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", handleScroll);
        document.addEventListener("touchmove", handleTouchMove, { passive: true });

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", handleScroll);
            document.removeEventListener("touchmove", handleTouchMove);
        };
    }, [menuRef, closeMenu]);

    useEffect(() => {
        if (isScrolling || isTouchScrolling) {
            closeMenu(); // Close menu when scrolling occurs
            setIsScrolling(false); // Reset scrolling state
            setIsTouchScrolling(false); // Reset touch scrolling state
        }
    }, [isScrolling, isTouchScrolling, closeMenu]);

    return (
        <section ref={menuRef} className={`absolute top-[${showMenu ? '46px' : "-100vh"}] duration-700 ease-in-out left-0 w-full h-fit menu-bar-style shadow shadow-red-300`}>
            <div className='w-full flex flex-col justify-start items-center gap-3 mt-3'>
                <Link href="/" onClick={closeMenu} className='text-center text-white text-xl font-bold'>Home</Link>
                <Link href="/" onClick={closeMenu} className='text-center text-white text-xl font-bold'>About Us</Link>
                <Link href="/" onClick={closeMenu} className='text-center text-white text-xl font-bold'>Contact Us</Link>
            </div>

            <ul className='w-full flex justify-center item gap-5 mt-12 mb-4'>
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
