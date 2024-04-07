import React from 'react'
import { FaDownload } from "react-icons/fa6";


const Sandesh = () => {
    return (
        <div className='w-[40%] bg-slate-100 flex justify-between items-center flex-col p-1 rounded-md'>

            <img src="/facebook.png" alt="sandesh"
                className='w-[120px] h-[170px] bg-red-200' />

            <div className='flex justify-center items-center w-full mt-1 gap-1'>
                <button className='bg-[#e51a4b] text-white font-bold px-1 rounded-md' >
                    अक्टूबर-2023
                </button>
                <FaDownload color='black' />

            </div>


        </div>
    )
}

export default Sandesh