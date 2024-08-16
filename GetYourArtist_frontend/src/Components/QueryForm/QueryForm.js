import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    queryType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/queryform', formData)
      .then(response => {
        setSubmitted(true);
        alert("Form submitted successfully!"); 
      })
      .catch(error => {
        console.error("There was an error submitting the query!", error);
        alert("There was an error submitting the form."); 
      });
  };
  console.log(formData)


  return (
    <div>
      <Navbar />

      <div className="container mx-auto mt-5 p-4 max-w-screen-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
          Query Form
        </h2>

        <div className="flex flex-col md:flex-row gap-8 bg-orange-50 my-5">
          {/* Query Form */}
          <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg m-5">
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                Thank you for your query!
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4 lg:mb-6">
                  <label htmlFor="firstName" className="block text-black-700 mb-2 lg:mb-4">First Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 lg:px-4 lg:py-3"
                    required
                  />
                </div>

                <div className="mb-4 lg:mb-6">
                  <label htmlFor="lastName" className="block text-black-700 mb-2 lg:mb-4">Last Name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 lg:px-4 lg:py-3"
                    required
                  />
                </div>

                <div className="mb-4 lg:mb-6">
                  <label htmlFor="emailId" className="block text-black-700 mb-2 lg:mb-4">Email*</label>
                  <input
                    type="email"
                    id="emailId"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleChange}
                    placeholder="Email ID"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 lg:px-4 lg:py-3"
                    required
                  />
                </div>

                <div className="mb-4 lg:mb-6">
                  <label className="block text-black-700 mb-2 lg:mb-4">Select Query Type*</label>
                  <div className="flex  flex-col space-y-1 md:space-y-0 md:space-x-1 lg:space-x-2">
                    {['Booking Inquiry', 'Pricing Information', 'Artist Availability', 'General Question', 'Technical Support'].map((type, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="radio"
                          name="queryType"
                          value={type.toLowerCase().replace(/ /g, '-')}
                          checked={formData.queryType === type.toLowerCase().replace(/ /g, '-')}
                          onChange={handleChange}
                          className="form-radio text-green-500"
                          required
                        />
                        <span className="ml-2 text-sm sm:text-base">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-4 lg:mb-6">
                  <label htmlFor="message" className="block text-black-700 mb-2 lg:mb-4">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 lg:px-4 lg:py-3 h-32 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600 transition-colors lg:py-3"
                >
                  Submit Query
                </button>
              </form>
            )}
          </div>

          {/* Images */}
          <div className="w-full md:w-1/3 flex flex-col gap-4 m-5">
            <img
              src="/Images/Query1.png"
              alt="QueryImage"
              className="w-full h-94 object-contain"
            />
            <img
              src="/Images/AQuery.jpg"
              alt="QueryImage2"
              className="w-full h-94 object-contain"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QueryForm;
