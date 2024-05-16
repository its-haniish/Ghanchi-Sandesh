import FooterMenu from '@/components/FooterMenu'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <main className='w-screen h-fit flex flex-col justify-start items-center mb-14 mt-[50px]'>
                <h1 className='text-black underline text-2xl font-Nunito font-semibold about-heading'>ABOUT US</h1>
                <img src="/logo.png" alt="Ghanchi Sandesh" className='w-full aspect-square' />
                <p className='w-full text-wrap text-justify px-4'>
                    विभिन्न पट्टी पारों में विभाजित क्षत्रिय घांची समाज में आपसी परिचय व संपर्क बढ़ाने के उद्देश्य से दिनेश चौहान भीनमाल द्वारा श्री घाँची संदेश पत्रिका का प्रकाशन प्रारंभ किया गया था। श्री घाँची संदेश द्वारा वर्ष 2001 में जालोर जिले में बसे समाजबंधुओं को एक माला में पिरोने के उद्देश्य से 'जालोर जिले की निर्देशिका' प्रकाशन किया गया था। इसके बाद समाजबंधुओं के सहयोग से श्री घाँची संदेश लगातार प्रकाशित हो रही थी, लेकिन 2020 में कोरोना के कारण इसका प्रकाशन बंद करना पड़ा था। वर्ष 2023 में समाज के अग्रणीय बंधुओं द्वारा मिले सकारात्मक सहयोग से श्री घाँची संदेश का प्रकाशन पुनः प्रारंभ किया था। वर्तमान समय में बढ़ते मोबाइल के उपयोग को ध्यान में रखते श्री घाँची संदेश पत्रिका डिजीटल प्लेटफार्म पर उपलब्ध करवाया जा रहा हैं। आशा हैं हमारा यह प्रयास आपको प्रसंद आएगा।
                </p>
                <div className='bg-red-300 w-full h-fit flex flex-col justify-start items-center py-2 mt-2'>
                    <img src="/dinesh.jpg" alt="dinesh" className='aspect-auto w-24 h-fit mb-1 shadow-lg rounded-sm' />
                    <p className='text-sm font-Nunito font-normal'>दिनेश चौहान
                    </p>
                    <p className='text-sm font-Nunito font-normal'>संपादक - श्री धाँची-संदेश</p>
                </div>
            </main>
            <FooterMenu />
        </>
    )
}

export default page