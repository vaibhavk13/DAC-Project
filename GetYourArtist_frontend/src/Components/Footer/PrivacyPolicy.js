import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Footer from './Footer';
import Navbar from '../Navbar/Navbar';

const PrivacyPolicy = () => {
    const [showContact, setShowContact] = useState(false);

    const handleScroll = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection.getBoundingClientRect().top <= window.innerHeight) {
            setShowContact(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navbar />

            <div >
                <div className="p-10">
                    <div className="container mx-auto">
                        <div className="text-center text-black">
                            <h1 className="text-4xl font-bold mb-6 text-red-700">Privacy Policy</h1>
                        </div>
                        <p className='font-semibold mt-4 text-black text-xl mb-6 text-center text-red-700'>
                            GetYourArtist is committed to protecting the privacy of its users. This Privacy Policy ("Policy") describes how we collect, process, and share information in providing the services through our platform.
                        </p>

                        <div className="space-y-10 text-black">
                            <div className="transition-all transform duration-500 hover:scale-105 hover:bg-red-30 shadow-lg p-8 bg-opacity-50 text-orange-100 rounded-lg">
                                <h2 className="text-2xl font-bold mb-4 text-black">Information Collected</h2>
                                <p className='text-black'>
                                    GetYourArtist collects personal information written by the Artists, Businesses, and Users including but not limited to: name, email address, phone number, billing information when they register an account or use our services. We may also collect the non-personal information that could be made of log information and details of visitor behavior in store on the website including but not limited to IP address, Browser Type, Operating System.
                                </p>
                                <p className="mt-4 font-bold text-xl mb-4 text-black">1.1 Artist...</p>
                                <p className='text-black'>
                                    1.1.1 By becoming the Artist, you agree that the Personal Information we may hold and collect about you includes your name, email address, and phone number to enable the availability of your booking and payment of services.
                                </p>
                                <p className='text-black'>
                                    1.1.2 Collected Personal Information includes information relating to your performance history, current genre, and location to optimize promotional and marketing information.
                                </p>
                                <p className="mt-4 font-bold text-xl mb-4 text-black">1.2 Businesses</p>
                                <p className='text-black'>
                                    1.2.1 As a Business, you agree and acknowledge that we shall be entitled to collect and use your personal information including but not limited to your name, email address, and phone number as provided for facilitating bookings and making due payment for the services of the Artists.
                                </p>
                                <p className='text-black'>
                                    1.2.2 We may also be entitled to collect your event or location size, venue type and information pertaining to the same for promotional and marketing purposes.
                                </p>
                                <p className="mt-4 font-bold text-xl mb-4 text-black">1.3 Users</p>
                                <p className='text-black'>
                                    1.3.1 You hereby acknowledge and agree that we may collect your personal information which particulars including but without limitation to, your name, email address, phone number, in order for us to process your bookings and payment for Artist services.
                                </p>
                                <p className='text-black'>
                                    1.3.2 We may also collect information regarding the location, size, and type of your event or venue for promotional and marketing purposes.
                                </p>
                            </div>

                            <div className="transition-all transform duration-500 hover:scale-105 hover:bg-red-50 shadow-lg p-8 bg-opacity-50 text-orange-100 rounded-lg">
                                <h2 className="text-2xl font-bold mb-4 text-black">Use of Information</h2>
                                <p>GetYourArtist may employ the personal and non-personal information collected from Artists, Businesses, and Users in the following ways...</p>
                                <p className='mb-2 text-black'>2.1 For delivering and improving our services: The information entered may be used to deliver what is promised, which is your account administration, payment processing, and customer support. We reserve the right to use the information for analyzing usage patterns to identify areas with weaknesses as we continue to improve our services.
                                </p>
                                <p className='mb-2 text-black'>2.2 To communicate to you: The information we may use for communication may include important notifications regarding changes of our terms and conditions and privacy policy, or to reply to your queries and requests.
                                </p>
                                <p className='mb-2 text-black'>2.3 To make your experience a personal one: We may use the information to make your experience on the GetYourArtist platform good for you, such as suggesting to you those Artists who you might have a liking for, based on your past bookings or preferences.
                                </p>
                                <p className='mb-2 text-black'>2.4 For compliance with laws and fiscal obligations: We may use the information to comply with laws and fiscal regulations of all applicable and concerned government authorities for taxation, money laundering, and fraud prevention.
                                </p>
                            </div>

                            <div className="transition-all transform duration-500 hover:scale-105 hover:bg-red-50 shadow-lg p-8 bg-opacity-50 text-orange-100 rounded-lg">
                                <h2 className="text-2xl font-bold mb-4 text-black">Disclosure of Information</h2>
                                <p className='mb-2 text-black'>3.1 We may disclose your personal information to third-party service providers, including but not limited to payment processors, analytics providers, and marketing partners, who help us run and improve our platform and services. The third-party service providers may have access to your personal information only to the extent necessary to provide the services reserved by GetYourArtist and are obliged to keep a duty of confidentiality and data protection.
                                </p>
                                <p className='mb-2 text-black'>3.2 We may further need to make available your personal data to law enforcement/governmental authorities if we are legally required to do so or if necessary to protect our legal rights—to include compliance with a judicial proceeding, court order, or lawful subpoena.
                                </p>
                                <p className='mb-2 text-black'>3.3 In case of a merger, acquisition, reorganization, or sale of assets, your personal information may be transferred to the acquiring organization, third parties, subject to an updated privacy policy, and you will be notified according to the necessary due process with respect to the changes made.
                                </p>
                                <p className='mb-2 text-black'>3.4 We can provide some aggregated or anonymous information to any third parties for the aim of conducting research, marketing, and others. Since this kind of information would not specifically pertain to someone's identification or activity, that information will not be traced back to the person applying for the service.
                                </p>
                                <p className='mb-2 text-black'>3.5 The use of our platform and service automatically implies that the user accepts the terms of disclosure of personal information indicated in this Policy.
                                </p>
                            </div>

                            <div className="transition-all transform duration-500 hover:scale-105 hover:bg-red-50 shadow-lg p-8 bg-opacity-50 text-orange-100 rounded-lg">
                                <h2 className="text-2xl font-bold mb-4 text-black">Cookies</h2>
                                <p className='mb-2 text-black'>4.1 Through the use of cookies and other such technologies, we may collect personal information on your visits to our website and your activity on our services. The usage of cookies can be controlled via your web browser settings.
                                </p>
                                <p className='mb-2 text-black'>4.2 However, it is crucial to bring to your attention that some functions of the site or services may not function as intended if you disable cookies.
                                </p>
                            </div>

                            <div className="transition-all transform duration-500 hover:scale-105 hover:bg-red-50 shadow-lg p-8 bg-opacity-50 text-orange-100 rounded-lg">
                                <h2 className="text-2xl font-bold mb-4 text-black">Security</h2>
                                <p className='mb-2 text-black'>5.1 Although we do our utmost to ensure the security of your information, no means of transmission over the internet or electronic means of storage are 100% secure. We implement industry-standard security measures, including encryption and firewalls, to help safeguard the information we collect from you from unauthorized access or disclosure, alteration, or destruction.
                                </p>
                                <p className='mb-2 text-black'>5.2 We strongly encourage you to take appropriate steps to protect your personal information and regularly review your account activity.
                                </p>
                            </div>

                            <div className="transition-all transform duration-500 hover:scale-105 hover:bg-red-50 shadow-lg p-8 bg-opacity-50 text-orange-100 rounded-lg">
                                <h2 className="text-2xl font-bold mb-4 text-black">Changes to This Policy</h2>
                                <p className='mb-2 text-black'>6.1 We may update or modify this Privacy Policy from time to time, and any changes will be posted on our website. Continued use of our services following the posting of changes constitutes acceptance of those changes.
                                </p>
                                <p className='mb-2 text-black'>6.2 We encourage you to review this Policy periodically to stay informed about how we are protecting your information.
                                </p>
                            </div>

                            <div className="transition-all transform duration-500 hover:scale-105 hover:bg-red-50 shadow-red-100 shadow-lg p-8 bg-opacity-50 text-orange-100 rounded-lg">
                                <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
                                <p className='text-black'>
                                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                                </p>
                                <p className='text-black'>
                                    Email: privacy@getyourartist.com<br />
                                    Phone: 123-456-7890
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="contact" className={`transition-opacity duration-700 ${showContact ? 'opacity-100' : 'opacity-0'}`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
