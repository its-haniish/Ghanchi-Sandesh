"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import NewsPreview from '@/components/NewsPreview'
import { RotatingLines } from 'react-loader-spinner'
import FooterMenu from '@/components/FooterMenu'


const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)


  const getAllPosts = async () => {
    setLoading(true)
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/get-all-posts`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();

    if (result?.msg === "Unable to fetch data.") {
      return alert(result.msg)
    }
    setLoading(false)
    setBlogs(result.response)
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <>
      <Navbar />

      <main className='w-screen h-fit flex flex-col justify-start items-center px-2 mb-24'>
        {/* dynamic feed wrapper  */}
        <div className='w-full'>
          {/* top new heading */}
          <h2 className='px-1 bg-[#e51a4b] text-white text-sm font-bold rounded w-fit h-5 text-nowrap mt-2 text-l'>
            टॉप न्यूज़
          </h2>
        </div>

        {
          loading ?
            <div className='flex flex-col gap-3 justify-center items-center w-full h-full mt-[20vh]'>
              <RotatingLines width='100' strokeColor='#e51a4b' />
              <p className='text-2xl text-[#e51a4b] font-bold'>Please wait...</p>
            </div>
            : <div className='flex flex-col w-full mt-2 justify-start items-center gap-3 overflow-y-visible'>
              {
                blogs?.map(post => {
                  const { _id } = post;
                  return (
                    <NewsPreview key={_id} post={post} />
                  )
                })

              }
            </div>}
      </main >
      <FooterMenu />
    </>
  )
}

export default Home