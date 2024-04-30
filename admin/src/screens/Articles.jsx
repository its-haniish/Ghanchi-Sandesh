import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import ArticleItem from '../components/ArticleItem';
import { RotatingLines } from "react-loader-spinner"

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)

    const getAllArticles = async () => {
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-all-articles`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" }
        });

        const result = await response.json();

        if (result?.msg === "Unable to fetch data.") {
            return alert(result.msg)
        }
        setLoading(false)
        setArticles(result.response.reverse())
    }


    useEffect(() => {
        getAllArticles()
    }, [])

    return (
        <>
            <Navbar
                blogTo="/"
                blogTitle="All Posts"
                articleTo="/add-article"
                articleTitle="Add Article" />
            {
                loading ?
                    <div className='flex flex-col gap-3 justify-center items-center w-full h-full mt-[20vh]'>
                        <RotatingLines width='100' strokeColor='#e51a4b' />
                        <p className='text-2xl text-[#e51a4b] font-bold'>Please wait...</p>
                    </div>
                    :
                    <main className='w-full mb-10'>

                        <h2 className='text-center text-bold text-xl font-["Tilt Neon"] mt-3'>Total Articles - {articles?.length}</h2>
                        {
                            articles?.map((article, index) => {
                                const { _id, slug } = article;
                                return (
                                    <ArticleItem key={_id} index={index} slug={slug} setArticles={setArticles} />
                                )
                            })
                        }
                    </main>}
        </>
    )
}

export default Articles