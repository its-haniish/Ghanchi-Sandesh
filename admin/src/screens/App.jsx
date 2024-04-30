import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import PostItem from '../components/PostItem';
import { RotatingLines } from "react-loader-spinner"

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false)

  const getAllPosts = async () => {
    setLoading(true)
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-all-posts`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();

    if (result?.msg === "Unable to fetch data.") {
      return alert(result.msg)
    }
    setLoading(false)

    setBlogs(result.response.reverse())
  }


  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <>
      <Navbar
        blogTo="/add-post"
        blogTitle="Add Post"
        articleTo="/articles"
        articleTitle="All Articles" />
      {
        loading ?
          <div className='flex flex-col gap-3 justify-center items-center w-full h-full mt-[20vh]'>
            <RotatingLines width='100' strokeColor='#e51a4b' />
            <p className='text-2xl text-[#e51a4b] font-bold'>Please wait...</p>
          </div>
          :
          <main className='w-full mb-10'>

            <h2 className='text-center text-bold text-xl font-["Tilt Neon"] mt-3'>Total Posts - {blogs?.length}</h2>
            {
              blogs?.map((post, index) => {
                const { _id, featured, createdAt, images, news, title, location, slug } = post;
                return (
                  <PostItem key={_id} featured={featured} createdAt={createdAt} news={news} location={location} title={title} images={images} id={_id} index={index} slug={slug} setBlogs={setBlogs} />
                )
              })
            }
          </main>}
    </>
  )
}

export default App