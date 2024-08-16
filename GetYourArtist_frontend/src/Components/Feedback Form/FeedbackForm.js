import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        overallExperience: '',
        feedbackType: '',
        feedbackDescription: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFeedbackType = (type) => {
        setFormData({ ...formData, feedbackType: type });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/feedback', formData)
            .then(response => {
                setSubmitted(true);
                alert("Form submitted successfully!"); 
            })
            .catch(error => {
                console.error("There was an error submitting the feedback!", error);
                alert("There was an error submitting the form."); 
            });
    };
    console.log(formData)

    return (
        <div>
            <Navbar />

            <div className="container mx-auto mt-5 p-4 max-w-screen-lg">
                {/* Feedback Form Heading */}
                <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
                    Feedback Form
                </h2>
                <p className="mb-10 text-sm sm:text-base lg:text-lg text-center text-orange-950">
                            We would love to hear your thoughts, suggestions, concerns, or problems with anything so we can improve!
                </p>


                <div className="flex flex-col md:flex-row gap-8 bg-orange-50 my-5">
                    {/* Feedback Form */}
                    <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg m-5">
                       
                        {submitted ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                Thank you for your feedback!
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4 lg:mb-6">
                                    <label className="block text-black-700 mb-2 lg:mb-4">How was your overall experience with us?</label>
                                    <div className="flex  space-x-0.5 sm:space-x-1 md:space-x-2 lg:space-x-4">
                                        {['😃', '😊', '🙂', '😐', '🙁'].map((emoji, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className="text-xl sm:text-2xl md:text-3xl hover:scale-110 transition-transform"
                                                onClick={() => handleChange({ target: { name: 'overallExperience', value: emoji } })}
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4 lg:mb-6">
                                    <label className="block text-black-700 mb-2 lg:mb-4">Feedback Type</label>
                                    <div className="flex flex-wrap  space-y-1 md:space-y-0 md:space-x-1 lg:space-x-2">
                                        {['Comment', 'Suggestion', 'Question'].map((type, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className={`px-3 py-2 rounded w-full md:w-auto lg:px-4 lg:py-2 ${formData.feedbackType === type
                                                        ? 'bg-red-500 text-white'
                                                        : 'bg-white text-black border border-red-500 hover:bg-red-100'
                                                    }`}
                                                onClick={() => handleFeedbackType(type)}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4 lg:mb-6">
                                    <label htmlFor="feedbackDescription" className="block text-black-700 mb-2 lg:mb-4">Describe Your Feedback*</label>
                                    <textarea
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 lg:px-4 lg:py-3"
                                        id="feedbackDescription"
                                        name="feedbackDescription"
                                        value={formData.feedbackDescription}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4 lg:mb-6">
                                    <label htmlFor="firstName" className="block text-black-700 mb-2 lg:mb-4">First Name*</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 lg:px-4 lg:py-3"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4 lg:mb-6">
                                    <label htmlFor="lastName" className="block text-black-700 mb-2 lg:mb-4">Last Name*</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 lg:px-4 lg:py-3"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4 lg:mb-6">
                                    <label htmlFor="email" className="block text-black-700 mb-2 lg:mb-4">E-mail*</label>
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 lg:px-4 lg:py-3"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600 transition-colors lg:py-3"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Images */}
                    <div className="w-full md:w-1/3 flex flex-col gap-4 m-5">
                        <img
                            src="/Images/Feedback1.png"
                            alt="FeedbackImage"
                            className="w-full h-94 object-contain"
                        />
                        <img
                            src="/Images/Feedback2.png"
                            alt="FeedbackImage2"
                            className="w-full h-94 object-contain"
                        />
                        <img
                            src="/Images/AFeedback.jpg"
                            alt="FeedbackImage3"
                            className="w-full h-80 object-contain"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FeedbackForm;
