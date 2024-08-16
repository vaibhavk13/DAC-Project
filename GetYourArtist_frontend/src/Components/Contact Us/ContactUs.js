import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div>
            <Navbar />

            <div
                className="relative py-4 mt-5 mx-5 bg-cover bg-center flex flex-col items-center"
                style={{
                    backgroundImage: "url('/Images/ContactUs.jpg')",
                    height: '60vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center mt-10">
                    <h2 className="text-4xl font-bold text-white">Connect with us</h2>
                    <p className="text-xl font-bold text-white mt-2">
                        Let's Start a Conversation About Your Artistic Journey!
                    </p>
                </div>

                {/* Contact Sections */}
                <div className="relative z-10 mt-14 flex flex-row gap-6 justify-center items-center w-full">
                    {/* Mail Us */}
                    <div className="relative bg-black bg-opacity-100 w-full md:w-80 h-28 p-4 rounded-lg shadow-lg flex items-center
                        transform transition-transform duration-300 ease-in-out
                        hover:bg-black hover:bg-opacity-80 hover:scale-105 hover:-translate-x-2 hover:z-10">
                        <div className="flex-shrink-0 text-4xl text-white mr-4">📧</div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-lg font-semibold mb-1 text-white">Mail Us</h2>
                            <p className="text-md text-white">get_your_artist@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="relative bg-black bg-opacity-100 w-full md:w-80 h-28 p-4 rounded-lg shadow-lg flex items-center
                        transform transition-transform duration-300 ease-in-out
                        hover:bg-black hover:bg-opacity-80 hover:scale-105 hover:-translate-x-2 hover:z-10">
                        <div className="flex-shrink-0 text-4xl text-white mr-4">📞</div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-lg font-semibold mb-1 text-white">Contact Us</h2>
                            <p className="text-md text-white">+91-9988776654</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 mx-5 bg-orange-50 border-2 border-red-50'>
                <div className='mt-10'>
                    <p className='text-red-700 text-lg text-center '>We are here to assist you with any questions, concerns, or information you need.<br></br>
                        Reach out to us through any of the following methods and let us know how we can help
                    </p>
                </div>

                {/* Feedback and Question Sections */}
                <div className="flex justify-center items-center gap-2 p-4">
                    <Link to="/feedbackform" className="w-1/2 flex justify-center">
                        <img
                            src="/Images/Feedback.png"
                            alt="FeedbackImage"
                            className="w-90 h-80 object-contain cursor-pointer"
                        />
                    </Link>
                    <Link to="/queryform" className="w-1/2 flex justify-center">
                        <img
                            src="/Images/Query.png"
                            alt="QueryImage"
                            className="w-90 h-80 object-contain cursor-pointer"
                        />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs
