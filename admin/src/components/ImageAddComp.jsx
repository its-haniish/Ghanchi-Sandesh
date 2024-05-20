import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { MdRemoveCircle } from 'react-icons/md';

const ImageAddComp = ({ images, setImages, readFileAsUrl }) => {

    const handleChange = async (e, index) => {
        if (e.target.type === 'file') {
            const base64String = await readFileAsUrl(e.target.files[0]);
            setImages(prevImages => {
                const newImages = [...prevImages];
                newImages[index] = base64String;
                return newImages;
            });
        } else {
            setImages(prevImages => {
                const newImages = [...prevImages];
                newImages[index] = e.target.value;
                return newImages;
            });
        }
    };

    const handleAddInput = (e) => {
        e.preventDefault();
        setImages(prevImages => [...prevImages, '']);
    };

    const handleRemoveImage = (index) => {
        setImages(prevImages => {
            const newImages = [...prevImages];
            newImages.splice(index, 1);
            return newImages;
        });
    };

    const renderInputs = () => {
        return images.map((image, index) => (
            <div key={index} className="flex flex-col items-center justify-start gap-1 w-full mt-2">
                <input
                    type="file"
                    className="bg-gray-100 w-[70%] text-center h-fit px-2 py-1 text-lg rounded-md"
                    accept="image/*"
                    onChange={(e) => handleChange(e, index)}
                />
                <div className='w-full flex justify-center gap-2 items-center'>
                    {image && <img src={image} alt="Preview" className='w-20 h-20 rounded-md' />}
                    <button onClick={() => handleRemoveImage(index)} type='button'>
                        <MdRemoveCircle color='red' fill="red" size={35} />
                    </button>
                </div>
            </div>
        ));
    };

    return (
        <div className="flex flex-col justify-start items-center w-full  mt-2 h-fit">
            <label className='font-semibold'>EXTRA IMAGES:</label>
            <button className='mt-1' onClick={handleAddInput} type='button'>
                <IoIosAddCircle color='red' fill="red" size={35} />
            </button>
            {renderInputs()}
        </div>
    );
};

export default ImageAddComp;
