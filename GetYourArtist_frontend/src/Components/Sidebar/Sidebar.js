import React, { useState } from 'react';

const Sidebar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [city, setCity] = useState('');

    // Updated list of categories
    const categories = [
        'Musician', 'Singer/Songwriter', 'Band', 'DJ', 'Comedian', 'Magician',
        'Dance Performer', 'Circus Performer', 'Illusionist', 'Street Performer',
        'Vocalist', 'Instrumentalist', 'Cover Band', 'Orchestra', 'Choral Group',
        'Theater Actor', 'Stand-Up Comedian', 'Puppeteer', 'Poet', 'Spoken Word Artist',
        'Visual Artist', 'Painter', 'Sculptor', 'Tattoo Artist', 'Voice Actor',
    ];

    const cities = [
        'Hyderabad', 'Itanagar', 'Dispur', 'Patna', 'Raipur', 'Panaji', 'Gandhinagar', 
        'Chandigarh', 'Shimla', 'Ranchi', 'Bengaluru', 'Thiruvananthapuram', 'Bhopal', 
        'Mumbai', 'Imphal', 'Shillong', 'Aizawl', 'Kohima', 'Bhubaneswar', 
        'Jaipur', 'Gangtok', 'Chennai', 'Agartala', 'Lucknow', 'Dehradun', 'Kolkata'
      ];
      

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleSearch = () => {
        // Pass the search parameters to the parent component
        onSearch({ searchTerm, category, city });
    };

    return (
        <div className="mx-5 w-80 bg-orange-100 p-4 h-screen">
            {/* Search Bar with Button */}
            <div className="mb-4 flex">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className="flex-1 p-2 border border-gray-300 rounded-l-md mr-2"
                />
                <button
                    onClick={handleSearch}
                    className="bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded-r-md"
                >
                    Search
                </button>
            </div>

            {/* Category Dropdown */}
            <select
                value={category}
                onChange={handleCategoryChange}
                className="w-full p-2 border border-gray-300 rounded mb-2"
            >
                <option value="">Select Category</option>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>

            {/* City Dropdown */}
            <select
                value={city}
                onChange={handleCityChange}
                className="w-full p-2 border border-gray-300 rounded mb-2"
            >
                <option value="">Select City</option>
                {cities.map(cit => (
                    <option key={cit} value={cit}>{cit}</option>
                ))}
            </select>
        </div>
    );
};

export default Sidebar;
