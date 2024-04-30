import React from 'react';
import Navbar from '@/components/Navbar';
import FooterMenu from '@/components/FooterMenu';

const Page = ({ params }) => {

    return (
        <>
            <Navbar />
            <main className='px-3 mb-6'>
                <iframe src={`/pdfs/${decodeURIComponent(params.pdf)}.pdf`} width="336px" height="550px"></iframe>
            </main>
            <FooterMenu />
        </>
    );
};


export default Page;
