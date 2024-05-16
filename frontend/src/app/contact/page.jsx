import FooterMenu from '@/components/FooterMenu'
import Navbar from '@/components/Navbar'
import React from 'react'
import { SiGoogleforms } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const page = () => {
    return (
        <>
            <Navbar />
            <main className='w-screen h-fit flex flex-col justify-start items-center mb-14 mt-[50px]'>
                <h1 className='text-black underline text-2xl font-Nunito font-semibold about-heading'>CONTACT US</h1>
                <div className='flex justify-center items-center gap-1 mt-2 flex-wrap px-2 bg-slate-200 w-screen shadow shadow-gray-300 py-1'>
                    <SiGoogleforms size={30} color='orange' />
                    <p className='text-wrap font-medium font-Nunito'>श्री धाँची संदेश में न्यूत देने के लिए फॉर्म भरें।
                    </p>
                </div>
                <ul className='ml-7 w-screen flex flex-col mt-4 gap-4'>
                    <li className='flex justify-start items-center w-fit gap-2'>
                        <MdLocationOn size={28} color='black' />
                        <p className='text-wrap text-sm font-medium font-Nunito'>D-347, SUMEL BUSINESS PARK-6, NEAR <br /> HANUMATU PURA BRTS AHMEDABAD,380004</p>
                    </li>
                    <li className='flex justify-start items-center w-fit gap-2'>
                        <IoLogoWhatsapp size={25} color='black' />
                        <p className='text-wrap text-sm font-medium font-Nunito'>9636941272</p>
                    </li>
                    <li className='flex justify-start items-center w-fit gap-2'>
                        <FaPhoneVolume size={24} color='black' />
                        <p className='text-wrap text-sm font-medium font-Nunito' >9460072296</p>
                    </li>
                    <li className='flex justify-start items-center w-fit gap-2'>
                        <MdOutlineMail size={25} color='black' />
                        <p className='text-wrap text-sm font-medium font-Nunito'>shreeghanchisandesh@gmail.com </p>
                    </li>
                </ul>

            </main>
            <FooterMenu />
        </>
    )
}

export default page