import React, { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';

const ImageAddComp = ({ images, setImages }) => {

    const handleChange = e => setImages({ ...images, [e.target.name]: e.target.value });

    const handleAddInput = (e) => {
        e.preventDefault();
        let lengthOfObject = Object.keys(images).length + 1;
        setImages({ ...images, [`image-${lengthOfObject}`]: '' });
    };

    const renderInputs = () => {
        if (Object.keys(images).length === 0) {
            return null; // Return null if there are no images
        }

        return Object.keys(images).map((key, index) => (
            <input
                key={key}
                type="text"
                placeholder="Enter link here..."
                className="bg-gray-100 w-[80%] text-center h-fit px-2 py-1 text-lg mt-2 rounded-md"
                name={key}
                value={images[key]}
                onChange={handleChange}
            />
        ));
    };


    return (
        <div className="flex flex-col justify-start items-center w-full mt-2 h-fit">
            <label className="font-semibold">EXTRA IMAGES:</label>
            {renderInputs()}
            <button className='mt-1' onClick={handleAddInput}>
                <IoIosAddCircle color='red' fill="red" size={35} />
            </button>
        </div>
    );
};

export default ImageAddComp;
