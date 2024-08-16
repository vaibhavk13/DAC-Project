import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    profilePhoto: null,
    description: '',
    username: '',
    password: '', // Added for password management
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from an API or context
    const fetchUserData = async () => {
      // Simulate fetching data
      setUserData({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St',
        profilePhoto: null,
        description: 'This is a brief description about John Doe.',
        username: 'john_doe',
        password: '', // Clear password on load
      });
    };

    fetchUserData();
  }, []);

  const validateForm = () => {
    // Simple validation for required fields
    return userData.firstName && userData.lastName && userData.email && userData.phone;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setUserData({ ...userData, [name]: files[0] });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode && !validateForm()) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);

    // Handle update logic here (e.g., API call)
    console.log('User Data Updated:', userData);
    setIsEditMode(false);
  };

  const handleEditModeToggle = () => {
    setIsEditMode(!isEditMode);
    if (isEditMode) {
      setIsFormValid(validateForm());
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl lg:p-10 lg:mt-1 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-blue-700">
            User Profile
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-4 lg:mb-6">
              <label className="block text-gray-700 mb-2 lg:mb-4">Username:</label>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                disabled={!isEditMode}
                required
              />
            </div>

            {/* First Name Field */}
            <div className="mb-4 lg:mb-6">
              <label className="block text-gray-700 mb-2 lg:mb-4">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                disabled={!isEditMode}
                required
              />
            </div>

            {/* Last Name Field */}
            <div className="mb-4 lg:mb-6">
              <label className="block text-gray-700 mb-2 lg:mb-4">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                disabled={!isEditMode}
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4 lg:mb-6">
              <label className="block text-gray-700 mb-2 lg:mb-4">Email:</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                disabled={!isEditMode}
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4 lg:mb-6">
              <label className="block text-gray-700 mb-2 lg:mb-4">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                disabled={!isEditMode}
                required
              />
            </div>

            {/* Address Field */}
            <div className="mb-4 lg:mb-6">
              <label className="block text-gray-700 mb-2 lg:mb-4">Address:</label>
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                disabled={!isEditMode}
              />
            </div>

            {/* Profile Photo Upload */}
            <div className="mb-6 lg:mb-8">
              <label className="block text-gray-700 mb-2 lg:mb-4">Upload Profile Photo:</label>
              <input
                type="file"
                name="profilePhoto"
                onChange={handleChange}
                className="w-full text-sm lg:text-base"
                disabled={!isEditMode}
              />
            </div>

            {/* Description Field */}
            <div className="mb-6 lg:mb-8">
              <label className="block text-gray-700 mb-2 lg:mb-4">Description:</label>
              <textarea
                name="description"
                value={userData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                disabled={!isEditMode}
              />
            </div>

            {/* Password Field (only visible in edit mode) */}
            {isEditMode && (
              <div className="mb-6 lg:mb-8">
                <label className="block text-gray-700 mb-2 lg:mb-4">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                />
              </div>
            )}

            <div className="flex gap-4 gap-4 items-center justify-center">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Go Back
              </button>

              <button
                type="button"
                onClick={handleEditModeToggle}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
              >
                {isEditMode ? 'Cancel' : 'Edit'}
              </button>

              <button
                type="submit"
                className={`text-white px-4 py-2 rounded ${isFormValid ? 'bg-green-700 hover:bg-green-600' : 'bg-green-300 cursor-not-allowed'}`}
                disabled={!isEditMode && !isFormValid}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
