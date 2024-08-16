import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import artistsData from '../../Constants/artistsData';
import { useNavigate } from 'react-router-dom';

// Use original data with _id
const cleanArtistsData = artistsData; // If _id is needed for navigation

const Artist = () => {
  const [filteredArtists, setFilteredArtists] = useState(cleanArtistsData);
  const navigate = useNavigate(); // Hook to handle navigation

  const handleSearch = (searchParams) => {
    const { searchTerm, category, city } = searchParams;

    console.log('Search Parameters:', searchParams);

    const results = cleanArtistsData.filter(artist => {
      const matchesCategory = category ? artist.genre === category : true;
      const matchesCity = city ? artist.address.includes(city) : true;
      const matchesSearchTerm = searchTerm ? artist.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || artist.last_name.toLowerCase().includes(searchTerm.toLowerCase()) : true;

      console.log('Artist:', artist);
      console.log('Matches Category:', matchesCategory);
      console.log('Matches City:', matchesCity);
      console.log('Matches Search Term:', matchesSearchTerm);

      return matchesSearchTerm && matchesCategory && matchesCity;
    });

    console.log('Search Results:', results);

    setFilteredArtists(results);
  };

  const handleCardClick = (id) => {
    if (id) {
      navigate(`/artist/${id}`); // Navigate to ArtistPage with artist ID
    } else {
      console.error('Artist ID is undefined'); // Error handling
    }
  };

  console.log('Initial artistsData:', cleanArtistsData);
  console.log('Filtered artists:', filteredArtists);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar onSearch={handleSearch} />
        <div className="flex-1 p-5 bg-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredArtists.length > 0 ? (
              filteredArtists.map(artist => (
                <div
                  key={artist._id} // Use _id as a unique key
                  className="bg-white p-4 rounded-lg shadow-lg w-64 cursor-pointer"
                  onClick={() => handleCardClick(artist._id)} // Pass artist ID to the handler
                >
                  <img
                    src={artist.profilePhoto}
                    alt={`${artist.first_name} ${artist.last_name}`}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-xl font-semibold mb-2">{artist.first_name} {artist.last_name}</h3>
                  <p className="text-gray-700">{artist.genre}</p>
                  <p className="text-gray-700">{artist.address}</p>
                </div>
              ))
            ) : (
              <p>No artists found</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artist;
