import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

const CreateBlogs = () => {
    const [title, setTitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [authorEmail, setAuthorEmail] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [keywords, setKeywords] = useState('');
    const [images, setImages] = useState([]);
    const [referenceLinks, setReferenceLinks] = useState([{ url: '', description: '' }]);
    const [modalOpen, setModalOpen] = useState(false);

    const handleImageUpload = (event) => {
        const uploadedImages = Array.from(event.target.files);
        setImages([...images, ...uploadedImages]);
    };

    const handleReferenceChange = (index, field, value) => {
        const newLinks = [...referenceLinks];
        newLinks[index][field] = value;
        setReferenceLinks(newLinks);
    };

    const addReferenceLink = () => {
        setReferenceLinks([...referenceLinks, { url: '', description: '' }]);
    };

    const handleEditorChange = (content) => {
        setBlogDescription(content);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title,
            authorName,
            authorEmail,
            blogDescription,
            keywords,
            images,
            referenceLinks,
        };
        console.log('Form Data:', formData);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg mt-10 bg-orange-100">
                <h2 className="text-2xl text-center text-red-700 font-bold mb-4">Create a New Blog</h2>
                <p className="mb-4 text-sm sm:text-base lg:text-lg text-center text-black">
                    Express your unique voice and insights with your audience. Craft compelling stories, share valuable knowledge, and make your mark through your blog.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                            Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Blog Title"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="authorName">
                            Author's Name:
                        </label>
                        <input
                            type="text"
                            id="authorName"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Author's Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="authorEmail">
                            Author's Email:
                        </label>
                        <input
                            type="email"
                            id="authorEmail"
                            value={authorEmail}
                            onChange={(e) => setAuthorEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Author's Email"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="keywords">
                            Keywords:
                        </label>
                        <input
                            type="text"
                            id="keywords"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Keywords (separate with commas)"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                            Blog Description:
                        </label>
                        <ReactQuill
                            theme="snow"
                            value={blogDescription}
                            onChange={handleEditorChange}
                            className="bg-white border border-gray-300 rounded-lg"
                            placeholder="Write your blog description here..."
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="images">
                            Add Images:
                        </label>
                        <input
                            type="file"
                            id="images"
                            multiple
                            onChange={handleImageUpload}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {images.length > 0 && (
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2">Uploaded Images</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={URL.createObjectURL(image)}
                                            alt={`Uploaded ${index + 1}`}
                                            className="h-24 w-24 object-cover rounded-lg shadow"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Reference Links</label>
                        {referenceLinks.map((link, index) => (
                            <div key={index} className="mb-4">
                                <input
                                    type="url"
                                    value={link.url}
                                    onChange={(e) => handleReferenceChange(index, 'url', e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder={`Reference Link ${index + 1}`}
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addReferenceLink}
                            className="text-blue-500 hover:underline "
                        >
                            + Add another link
                        </button>
                    </div>

                   <div className='flex flex-row mx-auto justify-center gap-4'> 
                   <div className="flex  justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Update Blog
                        </button>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-red-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Submit Blog
                        </button>
                    </div>
                   </div>

                </form>
            </div>

            <Modal
                isOpen={modalOpen}
                message="Blog created successfully !!! <br /> Thank you for your contribution" 
                onClose={closeModal}
            />

            <Footer />
        </div>
    );
};

export default CreateBlogs;
