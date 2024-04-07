import React from 'react';
import Link from "next/link";


const Menu = () => {


    return (
        <section className='absolute top-[7vh] w-full h-fit menu-bar-style shadow shadow-red-300'>

            <div className='w-full flex flex-col justify-start items-center gap-3 mt-3'>
                <Link href="/" className='text-center text-white text-xl font-bold'>Home</Link>
                <Link href="/" className='text-center text-white text-xl font-bold'>About Us</Link>
                <Link href="/" className='text-center text-white text-xl font-bold'>Contact Us</Link>
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

export default Menu