import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="text-amber-950 py-8 bg-cover bg-top my-10 mx-5"
                style={{ backgroundImage: "url('/Images/Background.jpg')" }}
        >
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="flex flex-col items-center lg:items-start mx-20">
                    <p className="mx-6 mt-4 text-2xl font-bold">Get Your Artist</p>
                    
                    {/* Center Column: Social Media Icons */}
                    <div className="flex mx-12 mt-4 space-x-4">
                        <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={28} />
                        </a>
                        <a href="https://twitter.com" className="text-blue-500 hover:text-black-700" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter size={28} /> {/* Twitter icon */}
                        </a>
                        <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={28} />
                        </a>
                    </div>
                </div>

                {/* Right Column: Footer Links */}
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12 mx-40">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <div className="space-y-2">
                            <Link to="/termsAndconditions" className="block hover:underline">Terms and Conditions</Link>
                            <Link to="/privacypolicy" className="block hover:underline">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Support</h3>
                        <div className="space-y-2">
                            <Link to="/help" className="block hover:underline">Help</Link>
                            <Link to="/contactus" className="block hover:underline">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
