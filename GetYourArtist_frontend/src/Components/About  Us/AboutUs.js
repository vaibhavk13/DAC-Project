import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <div
        className="relative py-4 mx-5 bg-cover bg-center flex items-center justify-center "
        style={{
          backgroundImage: "url('/Images/AboutContainer.jpg')",
          height: '60vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center' 
          
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white">About Us</h2>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-8 mx-20 mt-10 flex items-start relative">
        <img
          src="/Images/AboutMission.png"
          alt="Mission"
          className="w-60 h-60 rounded-full border-4 border-red-300 absolute -top-6 -left-2 z-10 "
        />
        <div className="flex-1 bg-orange-200 ml-32 mt-1 rounded-xl py-12 border-none p-8 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110">
          <h3 className="text-2xl font-semibold text-center text-red-700">Mission</h3>
          <p className="text-md text-red-700 text-left mt-4 px-20">
            At Get Your Artist, our mission is to revolutionize the event experience by seamlessly connecting talented artists with audiences worldwide.
            We simplify the booking process, ensuring that every event can effortlessly access top-tier talent.
            By empowering artists with innovative tools and opportunities, we aim to transform how they showcase their talents and engage with audiences,
            setting a new benchmark for excellence and accessibility in the arts and entertainment industry.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-8 mx-20 mt-6 flex items-start relative">
        <div className="flex-1 bg-orange-200 mr-32 mt-1 rounded-xl py-12 border-none p-8 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110">
          <h3 className="text-2xl font-semibold text-center text-red-700">Vision</h3>
          <p className="text-lg text-red-700 text-left mt-4 px-20">
            Our vision is to be the foremost global platform that bridges the gap between exceptional artists and eager audiences,
            creating unforgettable moments.
            We aspire to empower artists to thrive by providing them with unparalleled opportunities and resources.
            By continually innovating and refining our platform, we aim to redefine the event experience and elevate
            the standard for meaningful and impactful artistic connections worldwide.
          </p>
        </div>
        <img
          src="/Images/AboutVision.jpg"
          alt="Vision"
          className="w-60 h-60 rounded-full border-4 border-red-300 absolute -top-6 -right-2 z-10"
        />
      </div>

      {/* Services Section */}
      <div className="py-8 mx-5 border border-orange-200 border-6 ">
        <h2 className="text-3xl font-bold text-center mb-4 mx-10 text-red-700">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-4">

          <div className="w-80 h-80 p-2 flex flex-col items-center">
            <img
              src="/Images/AService1.jpg"
              alt="Service 1"
              className="w-64 h-64 object-cover rounded shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-center mt-4 text-red-700">Artist Booking</h3>
          </div>


          <div className="w-80 h-80 p-2 flex flex-col items-center">
            <img src="/Images/AService5.jpg" alt="Service 5" className="w-64 h-64 object-cover rounded shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" />
            <h3 className="text-xl font-semibold text-center mt-4 text-red-700">Customer Support</h3>
          </div>

          <div className="w-80 h-80 p-2 flex flex-col items-center">
            <img src="/Images/AService3.jpg" alt="Service 3" className="w-64 h-64 object-cover rounded shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" />
            <h3 className="text-xl font-semibold text-center mt-4 text-red-700">Artist Promotion</h3>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="w-80 h-80 p-2 flex flex-col items-center">
            <img src="/Images/AService4.jpg" alt="Service 4" className="w-64 h-64 object-cover rounded shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" />
            <h3 className="text-xl font-semibold text-center mt-4 text-red-700">Community Engagement</h3>
          </div>

          <div className="w-80 h-80 p-2 flex flex-col items-center">
            <img src="/Images/AService2.jpg" alt="Service 2" className="w-64 h-64 object-cover rounded shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" />
            <h3 className="text-xl font-semibold text-center mt-4 text-red-700">Event Management</h3>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-wrap py-8 mx-5 my-10 gap-8 bg-orange-100">
        <div className="flex-1">
          <p className="text-md font-bold text-orange-950 text-center p-10">
            We'd love to hear from you! <br />
            Whether you have questions, need assistance, or want to learn more about our services,
            our team is here to help. <br />
            Please feel free to reach out to us.
          </p>
        </div>

        <div className="flex-1 flex flex-row gap-6 mx-10">
          {/* Feedback Form Card */}
          <div
            className="relative bg-orange-100 p-4 rounded-lg shadow-lg shadow-red-300 flex flex-col items-center justify-center text-center
             transform transition-transform duration-300 ease-in-out
             hover:bg-red-200 hover:scale-105 hover:-translate-x-2 hover:z-10 w-full sm:w-96 md:w-1/2"
            style={{ backgroundImage: "url('/Images/AFeedback.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div
              className="absolute inset-0 bg-black opacity-50 z-10"
              style={{ backgroundBlendMode: 'overlay' }}
            ></div>
            <Link
              to="/feedbackform"
              className="relative z-20 bg-white text-red-700 px-8 py-3 rounded-lg font-semibold inline-block hover:bg-red-600 hover:text-white"
              style={{ textAlign: 'center' }}
            >
              Feedback Form
            </Link>
          </div>

          {/* Query Form Card */}
          <div
            className="relative bg-orange-100 p-4 rounded-lg shadow-lg shadow-red-300 flex flex-col items-center justify-center text-center
             transform transition-transform duration-300 ease-in-out
             hover:bg-red-200 hover:scale-105 hover:-translate-x-2 hover:z-10 w-full sm:w-96 md:w-1/2"
            style={{ backgroundImage: "url('/Images/AQuery.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div
              className="absolute inset-0 bg-black opacity-50 z-10"
              style={{ backgroundBlendMode: 'overlay' }}
            ></div>
            <Link
              to="/queryform"
              className="relative z-20 bg-white text-red-700 px-8 py-3 rounded-lg font-semibold inline-block hover:bg-red-600 hover:text-white"
              style={{ textAlign: 'center' }}
            >
              Query Form
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
