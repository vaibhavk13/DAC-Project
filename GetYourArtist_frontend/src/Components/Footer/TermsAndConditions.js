import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';

const TermsAndConditions = () => {
  const [selectedSection, setSelectedSection] = useState('user');

  const handleNavigation = (section) => {
    setSelectedSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-cover bg-center bg-no-repeat text-black mx-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Terms and Conditions</h2>

        {/* Tabs for User and Artist */}
        <div className="flex justify-center mb-6">
          <ul className="flex space-x-4 border-2 border-red-700 rounded-lg p-1 mx-5">
            <li
              className={`cursor-pointer font-bold text-lg pb-2 px-4 py-2 rounded-lg ${selectedSection === 'user' ? 'text-red-700 border-2 border-red-700' : 'text-gray-700 hover:text-black'}`}
              onClick={() => handleNavigation('user')}
            >
              User
            </li>
            <li
              className={`cursor-pointer font-bold text-lg pb-2 px-4 py-2 rounded-lg ${selectedSection === 'artist' ? 'text-red-700 border-2 border-red-700' : 'text-gray-700 hover:text-black'}`}
              onClick={() => handleNavigation('artist')}
            >
              Artist
            </li>
          </ul>
        </div>


        <div className='text-black'>
          <div className="bg-orange-100 bg-opacity-60 p-10 text-black rounded-lg">
            <div className="container mx-auto">
              <div className="space-y-10">
                {/* User Terms and Conditions */}
                {selectedSection === 'user' && (
                  <div id="user" className="shadow-lg p-8 bg-opacity-50 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">User Terms and Conditions</h2>
                    <p>These Terms and Conditions ("Terms" or “Agreement”) shall apply to all clients who register as a User on GetYourArtist's online platform ("Client"), including but not limited to individuals who intend to book artists for events, performances, etc., through the online platform operated.</p>
                    <p>By using GetYourArtist's platform, the Client agrees to be bound by these Terms, the Privacy Policy, and any other policies or guidelines posted on the platform. If the Client does not agree to these Terms, they should not use the platform.</p>

                    <h3 className="font-bold mt-6">Definitions and Interpretation</h3>
                    <ul className="list-disc pl-5 mt-4">
                      <li><strong>"Artist"</strong> means any individual or group of individuals who are registered on GetYourArtist's platform as service providers for live musical performances.</li>
                      <li><strong>"Artist Content"</strong> means any content created, produced, or licensed by the Artist for the purposes of performing on behalf of the Client, including but not limited to music, videos, photographs, and other media.</li>
                      <li><strong>"Booking"</strong> means the agreement between the Client and the Artist for the provision of the Artist's services for an Event, as confirmed through the GetYourArtist platform.</li>
                      <li><strong>"Booking Amount"</strong> means the total amount payable by the Client to GetYourArtist for the Artist's services for an Event, as specified in the Booking confirmation.</li>
                      <li><strong>"Event"</strong> means a live performance or appearance by the Artist that has been booked by the Client through the GetYourArtist platform, and may include, but is not limited to, concerts, gigs, weddings, corporate events, private parties, and any other live performance or appearance by the Artist.</li>
                      <li><strong>"Platform"</strong> means GetYourArtist's online platform, accessible through its website, mobile applications, and any other means provided by GetYourArtist, which connects Clients with Artists for the purposes of hiring the Artist's services.</li>
                      <li><strong>"Platform Fee"</strong> means the fee charged by GetYourArtist to the Client for using its Platform to hire an Artist, which shall be 20% of the total Booking Amount.</li>
                      <li><strong>"Transaction"</strong> means any interaction between the Client and GetYourArtist, including but not limited to the creation of a Booking, payment of the Booking Amount, and any communication through the Platform.</li>
                      <li><strong>"Client Content"</strong> means any content provided by the Client, including but not limited to information provided during registration, Booking details, and feedback and reviews of the Artist's services.</li>
                    </ul>
                  </div>
                )}

                {/* Artist Terms and Conditions */}
                {selectedSection === 'artist' && (
                  <div id="artist" className="shadow-lg p-8 bg-opacity-50 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Artist Terms and Conditions</h2>
                    <h3 className="font-bold">INTRODUCTION</h3>
                    <p>These Terms and Conditions ("Agreement" or “Terms and Conditions”) govern the use of the GetYourArtist platform by artists("Artist" or "You").</p>
                    <p>GetYourArtist ("GetYourArtist") is an online platform owned and operated by UMW Tech Solutions Private Limited, which connects Artists with potential Clients for live performances.</p>
                    <p>"Artist" refers to any musician, singer, band, comedian, or other performer who uses the platform to promote their availability for live performances.</p>
                    <p>By using the platform, Artist agrees to be bound by this Agreement and to comply with all applicable laws, rules, and regulations related to their performances.</p>

                    <h3 className="font-bold mt-6">DEFINITIONS & INTERPRETATIONS</h3>
                    <p>In these Terms and Conditions, unless the context requires otherwise, the following words shall have the following meanings:</p>
                    <p>"Client" means a person or entity that uses the GetYourArtist platform to book an Artist for an Event.</p>
                    <p>"Event" means a live performance or appearance by the Artist that has been booked by the Client through the GetYourArtist platform, and may include, but is not limited to, concerts, gigs, weddings, corporate events, private parties, and any other live performance or appearance by the Artist.</p>
                    <p>"Booking" means the agreement between the Client and the Artist for the provision of the Artist's services for an Event, as confirmed through the GetYourArtist platform.</p>
                    <p>"Booking Amount" means the total amount payable by the Client to GetYourArtist for the Artist's services for an Event, as specified in the Booking confirmation.</p>
                    <p>References to the singular include the plural and vice versa, and references to any gender include all genders.</p>
                    <p>The headings in these Terms and Conditions are for convenience only and shall not affect their interpretation.</p>
                    <p>Any reference to a statute, statutory provision, regulation, or order shall be construed as a reference to that statute, statutory provision, regulation, or order as amended, re-enacted, or replaced from time to time.</p>

                    <h3 className="font-bold mt-6">ACCOUNT REGISTRATION AND USE</h3>
                    <p>Artist must be at least 18 years old to use the platform.</p>
                    <p>In case the Artist is below the age of 18, they may register on the platform with the consent of their parent or legal guardian, who shall provide their details and accept these Terms and Conditions on the Artist's behalf. The parent or legal guardian shall be responsible for ensuring that the Artist complies with these Terms and Conditions and shall be liable for any breach of these Terms and Conditions by the Artist.</p>
                    <p>Artist agrees to provide accurate and complete information when registering for an account and to keep the information updated.</p>
                    <p>Artist is responsible for maintaining the confidentiality of the account and password and for all activities that occur under the account.</p>
                    <p>Artist agrees to use the platform only for lawful purposes and in compliance with all applicable laws, rules, and regulations.</p>

                    <h3 className="font-bold mt-6">CONTENT OWNERSHIP AND LICENCE</h3>
                    <h4 className="font-bold mt-2">Ownership of Content</h4>
                    <p>Artist retains ownership of all content uploaded or submitted to the platform, including but not limited to music, videos, images, and other media ("Artist Content").</p>
                    <p>GetYourArtist does not claim ownership of any Artist Content.</p>

                    <h4 className="font-bold mt-2">License to GetYourArtist</h4>
                    <p>Artist grants GetYourArtist a non-exclusive, royalty-free, worldwide license to use, display, and distribute the Artist Content for the purposes of operating the platform and promoting the Artist's services.</p>
                    <p>This license includes the right to use the Artist Content in marketing and promotional materials for the platform and to display it on the platform in connection with the Artist's profile and Bookings.</p>
                    <p>Artist acknowledges that GetYourArtist may use the Artist Content to promote the platform and may feature it in promotional materials, advertisements, and other media.</p>
                    <p>Artist agrees not to use the platform to upload or submit any content that is illegal, defamatory, obscene, or infringes on the rights of others.</p>
                    <p>Artist is responsible for ensuring that any content uploaded to the platform does not violate any laws or infringe on the rights of third parties.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
