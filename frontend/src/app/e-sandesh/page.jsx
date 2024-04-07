import Navbar from '@/components/Navbar';
import Sandesh from '@/components/Sandesh';
import React from 'react';

const Page = () => {
    return (
        <>
            <Navbar />
            <main className='w-full px-3 overflow-scroll'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-xl bg-white text-[#e51a4b] font-bold border-[#e51a4b] border-1 shadow-sm shadow-red-300 rounded w-fit h-fit py-1 px-4 mt-3'>
                        इ-संदेश
                    </h1>

                </div>

                <section className='w-full flex justify-center items-start flex-wrap mt-3 gap-3 overflow-visible mb-7'>
                    <Sandesh />
                    <Sandesh />
                    <Sandesh />
                    <Sandesh />
                    <Sandesh />
                    <Sandesh />
                    <Sandesh />
                    <Sandesh />

                </section>


            </main>
        </>
    )
}

export default Page;