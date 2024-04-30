import React from 'react'
import { FaDownload } from "react-icons/fa6";

const Sandesh = ({ pdf }) => {
    const handlePdfDownload = () => {
        // Assuming `pdf` is the path to the PDF file
        const pdfUrl = `/pdfs/${pdf}.pdf`; // Adjust the path as needed
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', `Ghanchi Sandesh ${pdf}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='w-[40%] bg-slate-100 flex justify-between items-center flex-col p-1 rounded-md'>

            <img src={`/pdfs/thumbnails/${pdf}.jpg`} alt="sandesh"
                className='w-[120px] h-[170px] bg-red-200' />

            <div className='flex justify-center items-center w-full mt-1 gap-1' onClick={handlePdfDownload}>
                <button className='bg-[#e51a4b] text-white font-bold px-1 rounded-md' >
                    {pdf}
                </button>
                <FaDownload color='black' />

            </div>


        </div>
    )
}

export default Sandesh