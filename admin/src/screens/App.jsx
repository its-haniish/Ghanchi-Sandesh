import React from 'react'
import Navbar from '../components/Navbar';
import PostItem from '../components/PostItem';

const App = () => {
  return (
    <>
      <Navbar to="/add-post" title="Add Post" />
      <main className='w-full mb-10'>

        <h2 className='text-center text-bold text-xl font-["Tilt Neon"] mt-3'>Total Posts - 230</h2>
        <PostItem />
        <PostItem />
        <PostItem />
      </main>
    </>
  )
}

export default App