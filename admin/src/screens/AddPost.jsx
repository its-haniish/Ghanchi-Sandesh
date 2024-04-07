import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { RotatingLines } from 'react-loader-spinner'

const AddPost = () => {
    const [loading, setLoading] = useState(false)

    return (
        <>
            <Navbar to="/" title="All Posts" />

            <form className='flex flex-col w-full px-2 justify-start items-center gap-3'>
                <input
                    type="text"
                    name="title"
                    placeholder='Write title here..'
                    className='text-xl text-black text-justify border-b mt-2  border-l p-1 w-full text-wrap' />

                <div className='w-full flex flex-col justify-center items-center mt-2'>
                    <label htmlFor="featured" className='text-lg'>Featured Image: </label>
                    <input type="file" />
                </div>

                <textarea
                    name="news"
                    placeholder='Write your news here...'
                    className='text-xl text-black text-justify border-b border-l p-1 mt-2 w-full'
                ></textarea>

                <div className='w-full flex flex-col justify-center items-center mt-2'>
                    <label htmlFor="featured" className='text-lg'>Extra Images: </label>
                    <input type="file" />
                </div>

                <button className='mt-5 bg-[#e51a4b] text-white text-lg py-1 px-4 rounded active:bg-slate-600 w-28 h-10 flex justify-center items-center' onClick={() => setLoading(!loading)}>
                    {!loading ? "POST" : <RotatingLines height="30" width="30" strokeColor='white' />}
                </button>

            </form>

        </>
    )
}

export default AddPost