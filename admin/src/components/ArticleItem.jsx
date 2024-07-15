import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ArticleItem = ({ index, slug, setArticles }) => {
    const navigate = useNavigate()

    const deletePost = async (slug) => {
        const confirmation = window.confirm(`Are you sure you want to delete ${slug} ?`);
        if (!confirmation) {
            return;
        }
        try {
            let res = await fetch(`${process.env.REACT_APP_BASE_URL}/delete-gs-article`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ slug })
            })
            let result = await res.json()
            if (result?.msg === "Article deleted successfully.") {
                setArticles(prev => prev.filter(elem => elem.slug !== slug))
            }
        } catch (error) {
            alert(error);
        }
    }


    return (

        <div className='w-full h-[6vh] px-2 rounded-md flex justify-between items-center'>

            <p className='w-fit text-xl'>{index + 1}.</p>
            <p className='w-[80%] text-nowrap overflow-ellipsis text-xl text-blue-900'>{slug}</p>
            <div className='flex justify-center items-center gap-1'>
                <button onClick={() => {
                    navigate(`/edit-article/${slug}`)
                }}>
                    <FaEdit color='green' size={23} />

                </button>
                <button onClick={() => deletePost(slug)}>
                    <MdDeleteForever color='red' size={25} />
                </button>
            </div>
        </div>
    )
}

export default ArticleItem