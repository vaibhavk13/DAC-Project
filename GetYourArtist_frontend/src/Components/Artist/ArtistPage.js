import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link here
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import artistsData from '../../Constants/artistsData';

const ArtistPage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        setTimeout(() => {
          const artistData = artistsData.find(a => a._id === id);
          if (artistData) {
            setArtist(artistData);
          } else {
            setError(new Error('Artist not found'));
          }
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchArtistData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;
  if (!artist) return <p>No artist data found.</p>;

  const socialMediaLinks = artist.socialMedia || {};
  const imageCards = artist.photos || [];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row p-6 shadow-lg rounded-lg mx-5 mt-6">
        {/* Left Side */}
        <div className="flex-shrink-0 md:w-1/3 bg-orange-100 py-5 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <img
              src={artist.profilePhoto}
              alt="Profile"
              className="w-44 h-44 rounded-full border-4 border-orange-300 shadow-md"
            />
          </div>
          {/* Website Logo and Social Media Icons */}
          <div className="flex flex-wrap justify-center gap-4 my-4">
            {socialMediaLinks.website && (
              <a href={socialMediaLinks.website} className="text-gray-600 hover:text-gray-800">
                <FaGlobe size={28} />
              </a>
            )}
            {socialMediaLinks.facebook && (
              <a href={socialMediaLinks.facebook} className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={28} />
              </a>
            )}
            {socialMediaLinks.twitter && (
              <a href={socialMediaLinks.twitter} className="text-stone-800 hover:text-gray-400">
                <FaXTwitter size={28} />
              </a>
            )}
            {socialMediaLinks.instagram && (
              <a href={socialMediaLinks.instagram} className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={28} />
              </a>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 pl-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{artist.first_name} {artist.last_name}</h2>
          <p className="text-gray-600 mb-2">Email: <a href={`mailto:${artist.email}`} className="text-blue-600 hover:underline">{artist.email}</a></p>
          <p className="text-gray-600 mb-2">Phone: {artist.contact_number}</p>
          <p className="text-gray-600 mb-4">Location: {artist.address}</p>
          <Link to="/booking"> 
            <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-6 rounded shadow-md transition-transform transform hover:scale-105">
              Book
            </button>
          </Link>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-6 mx-5 mt-6 bg-orange-100 shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
        <p className="text-gray-600">{artist.about_work}</p>
      </div>

      {/* Image Cards Section */}
      <div className="p-6 mx-5 mt-6 bg-orange-100 shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imageCards.length > 0 ? (
            imageCards.map((image, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                <img src={image} alt={`Art ${index + 1}`} className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105" />
              </div>
            ))
          ) : (
            <p>No images available.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtistPage;
