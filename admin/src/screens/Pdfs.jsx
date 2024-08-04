import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { RotatingLines } from "react-loader-spinner";
import PdfItem from '../components/PdfItem';

const Pdfs = () => {
    const [pdfs, setPdfs] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllPdfs = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-all-gs-pdfs-title`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" }
            });

            let result = await response.json();

            if (response.status === 200) {
                setPdfs(result.reverse());
            } else {
                alert(result.msg || "Error fetching pdfs");
            }
        } catch (error) {
            console.error("Error fetching pdfs:", error);
            alert("An error occurred while fetching pdfs. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllPdfs();
    }, []);

    return (
        <>
            <Navbar
                blogTo="/"
                blogTitle="All Posts"
                articleTo="/articles"
                articleTitle="All Articles"
                videoTo="/add-video"
                videoTitle="Add Videos"
                pdfTo='/add-pdf'
                pdfTitle='Add Pdfs'
            />
            {loading ? (
                <div className='flex flex-col gap-3 justify-center items-center w-full h-full mt-[20vh]'>
                    <RotatingLines width='100' strokeColor='#e51a4b' />
                    <p className='text-2xl text-[#e51a4b] font-bold'>Please wait...</p>
                </div>
            ) : (
                <main className='w-full mb-10'>
                    <h2 className='text-center text-bold text-xl font-["Tilt Neon"] mt-3'>Total Pdfs - {pdfs.length}</h2>
                    {pdfs.map((pdf, index) => {
                        const { _id, title } = pdf;
                        return (
                            <PdfItem
                                key={_id}
                                index={index}
                                id={_id}
                                title={title}
                                setPdfs={setPdfs}
                            />
                        );
                    })}
                </main>
            )}
        </>
    );
}

export default Pdfs;
