import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PostItem from '../components/PostItem';
import { RotatingLines } from "react-loader-spinner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-all-gs-post-slugs`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" }
      });

      const result = await response.json();
      console.log("Fetched blogs:", result);

      if (response.status === 200) {
        setBlogs(result.reverse());
      } else {
        alert(result.msg || "Error fetching posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      alert("An error occurred while fetching posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <Navbar
        blogTo="/add-post"
        blogTitle="Add Post"
        articleTo="/articles"
        articleTitle="All Articles"
        videoTo="/videos"
        videoTitle="All Videos"
        pdfTo='/pdfs'
        pdfTitle='All Pdfs'
      />
      {loading ? (
        <div className='flex flex-col gap-3 justify-center items-center w-full h-full mt-[20vh]'>
          <RotatingLines width='100' strokeColor='#e51a4b' />
          <p className='text-2xl text-[#e51a4b] font-bold'>Please wait...</p>
        </div>
      ) : (
        <main className='w-full mb-10'>
          <h2 className='text-center text-bold text-xl font-["Tilt Neon"] mt-3'>Total Posts - {blogs.length}</h2>
          {blogs.map((post, index) => {
            const { _id, slug } = post;
            return (
              <PostItem
                key={_id}
                slug={slug}
                index={index}
                setBlogs={setBlogs}
              />
            );
          })}
        </main>
      )}
    </>
  );
}

export default Blogs;
