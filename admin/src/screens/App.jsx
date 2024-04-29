import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import PostItem from '../components/PostItem';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllPosts = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-all-posts`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();

    if (result?.msg === "Unable to fetch data.") {
      return alert(result.msg)
    }
    setBlogs(result.response)
  }


  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <>
      <Navbar to="/add-post" title="Add Post" />
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
      </main>
    </>
  )
}

export default App