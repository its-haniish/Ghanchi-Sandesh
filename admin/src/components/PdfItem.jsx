import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const PdfItem = ({ index, id, setPdfs, title }) => {
    const [trauntedText] = useState(title.substring(0, 25))
    const navigate = useNavigate()

    const deletePdf = async () => {
        const confirmation = window.confirm(`Are you sure you want to delete ${title} ?`);
        if (!confirmation) {
            return;
        }

        try {
            let res = await fetch(`${process.env.REACT_APP_BASE_URL}/delete-gs-pdf`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            })
            let result = await res.json()
            if (result?.msg === "Pdf deleted successfully.") {
                setPdfs(prev => prev.filter(elem => elem._id !== id))
            }
        } catch (error) {
            alert(error);
        }
    }

    return (

        <div className='w-full h-[6vh] px-2 rounded-md flex justify-between items-center'>

            <p className='w-fit text-xl'>{index + 1}.</p>
            <p className='w-[80%] text-nowrap overflow-ellipsis text-xl text-blue-900'>{trauntedText}...</p>
            <div className='flex justify-center items-center gap-1'>
                <button onClick={() => {
                    navigate(`/edit-pdf/${id}`)
                }}>
                    <FaEdit color='green' size={23} />

                </button>
                <button onClick={() => deletePdf(id)}>
                    <MdDeleteForever color='red' size={25} />
                </button>
            </div>
        </div>
    )
}

export default PdfItem