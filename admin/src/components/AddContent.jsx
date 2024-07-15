import React, { useState } from 'react';

const AddContent = ({ contents, setContents, readFileAsUrl }) => {
    const [formData, setFormData] = useState({
        type: '',
        content: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleAddContent = (e) => {
        e.preventDefault();
        if (formData.type === '') {
            return alert('Please select a content type');
        }
        if (formData.content === '') {
            return alert('Please enter content');
        }
        setContents([...contents, formData]);
        setFormData({ type: '', content: '' });
    };

    return (
        <div className="flex flex-col justify-center items-center gap-1 bg-gray-200 shadow p-2 rounded-lg w-[80vw] my-2">
            <select
                className="border rounded mb-2"
                name="type"
                value={formData.type}
                onChange={handleChange}
            >
                <option value="">Select Content Type</option>
                <option value="Heading">Heading</option>
                <option value="Paragraph">Text</option>
                <option value="Image">Image</option>
            </select>
            <textarea
                placeholder="Enter content here..."
                className="bg-gray-100 w-full text-center h-44 px-2 py-1 text-lg mt-1 rounded-md mb-2"
                name="content"
                value={formData.content}
                onChange={handleChange}
                style={{ display: formData.type === 'Image' ? 'none' : 'block' }}
            />
            <input
                type="file"
                className="bg-gray-100 w-full text-center h-fit px-2 py-1 text-lg mt-1 rounded-md mb-2"
                name="content"
                accept="image/*"
                style={{ display: formData.type === 'Image' ? 'block' : 'none' }}
                onChange={async (e) => {
                    const base64String = await readFileAsUrl(e.target.files[0]);
                    setFormData({ ...formData, content: base64String });
                }}
            />
            <button
                className="text-white bg-blue-400 rounded w-fit px-2 py-1"
                onClick={handleAddContent}
            >
                ADD
            </button>
        </div>
    );
};

export default AddContent;
