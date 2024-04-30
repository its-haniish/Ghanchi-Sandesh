"use client"
import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import Link from 'next/link';

const FooterMenu = () => {


    return (
        <footer className='fixed bottom-[0px] left-0 right-0 w-full h-fit bg-gray-300 shadow'>

            <ul className='w-full h-fit flex justify-evenly items-center py-2 bottom-0'>
                <li className='p-1 border-x border-r-0 border-slate-400 w-1/3 flex justify-center items-center'>
                    <Link href="/" className='text-center text-white text-xl font-bold'>
                        <AiFillHome size={30} fill='black' color='black' />
                    </Link>
                </li>
                <li className='p-1 border-x border-r-0 border-slate-400 w-1/3 flex justify-center items-center'>
                    <Link href="/videos" className='text-center text-white text-xl font-bold'>
                        <FaPlayCircle size={30} fill='black' color='black' />
                    </Link>
                </li>
                <li className='p-1 border-x border-r-0 border-slate-400 w-1/3 flex justify-center items-center'>
                    <Link href="/articles" className='text-center text-white text-xl font-bold'>
                        <MdEditDocument size={30} fill='black' color='black' />
                    </Link>
                </li>
            </ul>

        </footer>
    )
}

export default FooterMenu