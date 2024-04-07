import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const NewsPreview = () => {

    const text = "लोरेम इप्सम डोलोर सीट अमित कोनसेक्टेटर एडीपीसीसिंग एलिट. कोर्रुप्ति इन्सिडन्ट वेरिटेटिस दुसमउस क्वासि से  इप्सम डोलोर सीट अमित कोनसेक्टेटर एडीपीसीसिंग एलिट. कोर्रुप्ति इन्सिडन्ट वेरिटेटिस दुसमउस क्वासि से  इप्सम डोलोर सीट अमित कोनसेक्टेटर एडीपीसीसिंग एलिट. कोर्रुप्ति इन्सिडन्ट वेरिटेटिस दुसमउस क्वासि से  इप्सम डोलोर सीट अमित कोनसेक्टेटर एडीपीसीसिंग एलिट. कोर्रुप्ति इन्सिडन्ट वेरिटेटिस दुसमउस क्वासि से  इप्सम डोलोर सीट अमित कोनसेक्टेटर एडीपीसीसिंग एलिट. कोर्रुप्ति इन्सिडन्ट वेरिटेटिस दुसमउस क्वासि से  इप्सम डोलोर सीट अमित कोनसेक्टेटर एडीपीसीसिंग एलिट. कोर्रुप्ति इन्सिडन्ट वेरिटेटिस दुसमउस क्वासि से  इप्सम डोलोर सीट अमित कोनसेक्टेटर एडीपीसीसिंग एलिट. कोर्रुप्ति इन्सिडन्ट वेरिटेटिस दुसमउस क्वासि से  इप्सम डोलोर सीट अमित कोनसेक्टेटर एडीपीसीसिंग एलिट. कोर्रुप्ति इन्सिडन्ट वेरिटेटिस दुसमउस क्वासि से  इप्सम डोलोर सीट अमित कोनसेक्टेटर एडीपीसीसिंग एलिट. कोर्रुप्ति इन्सिडन्ट वेरिटेटिस दुसमउस क्वासि से";

    const truncatedText = text.substring(0, 150);



    return (
        <div className='bg-gray-100 rounded-md py-1 px-2 w-full h-[21vh] '>

            <div className='flex justify-start items-center gap-1 h-[12%]'>
                <FaLocationDot color='#e51a4b' size={14} />
                <span className='text-[#e51a4b] text-sm font-bold'>मुंबई</span>
            </div>

            <h2 className='h-[15%] font-extrabold text-l text-[blue] underline whitespace-nowrap overflow-ellipsis'>
                ानिधाम दे नुक्त चिकित्सा मुक्त केंद्र भोळ लाला हेयो नजसकद सदस्या सड़ एड्स ा डी फेकव असद स फगव
            </h2>

            <div className='flex justify-start items-center h-[70%] mt-1 gap-2'>

                <p className='w-[100%] h-full overflow-hidden overflow-ellipsis text-sm font-medium text-justify '>
                    {truncatedText}...
                </p>

                <img src="/Ghanchi Sandesh.jpg" alt="" className='w-[200px] rounded-md' />

            </div>
        </div>
    )
}

export default NewsPreview