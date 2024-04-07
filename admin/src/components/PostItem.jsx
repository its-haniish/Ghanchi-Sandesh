import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const PostItem = () => {
    return (

        <div className='w-full h-[6vh] px-2 rounded-md flex justify-between items-center'>

            <p className='w-fit text-xl'>1.</p>
            <p className='w-[80%] text-nowrap overflow-ellipsis text-xl text-blue-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className='flex justify-center items-center gap-1'>
                <button>
                    <FaEdit color='green' size={23} />

                </button>
                <button>
                    <MdDeleteForever color='red' size={25} />

                </button>
            </div>
        </div>
    )
}

export default PostItem