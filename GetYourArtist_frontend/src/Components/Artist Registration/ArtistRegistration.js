import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

const ArtistRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    genre: '',
    address: '',
    email: '',
    website: '',
    phone: '',
    profilePhoto: null,
    idProof: null,
    description: '',
    workPhotos: [],
    socialLinks: { facebook: '', instagram: '', twitter: '', snapchat: '' },
    confirmation: false,
    gender: '', 
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const { firstName, lastName, genre, address, email, phone, idProof, description, gender } = formData;


    // Check if all required fields are filled
    const isValid = firstName && lastName && genre && address && email && phone && idProof && description && gender;

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleWorkPhotosChange = (e) => {
    setFormData({ ...formData, workPhotos: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.confirmation) {
      alert('Please confirm that the details provided are correct.');
      return;
    }
    console.log('Form Data Submitted:', formData);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      genre: '',
      address: '',
      email: '',
      website: '',
      phone: '',
      profilePhoto: null,
      idProof: ' ',
      description: '',
      workPhotos: [],
      socialLinks: { facebook: '', instagram: '', twitter: '', snapchat: '' },
      confirmation: false,
      gender: '',
    });
    setIsFormValid(false);
  };

  const handleEditModeToggle = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto  p-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl lg:p-10 lg:mt-1 bg-orange-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full ">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-red-700">
            Registration
          </h2>
          {/* <p className="mb-4 text-sm sm:text-base lg:text-lg text-center text-orange-950">
            Register as an Artist with @GETYOURARTIST
          </p> */}

          <form onSubmit={handleSubmit}>
            <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">Personal Details:</h3>
            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">First Name*:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                required
              />
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Last Name*:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                required
              />
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Gender*:</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Other
                </label>
              </div>
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Genre*:</label>
              <select
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                required
              >
                <option value="" disabled>Select Genre</option>
                <option value="Dancer">Dancer</option>
                <option value="Devotional Singer">Devotional Singer</option>
                <option value="Digital Art">Digital Art</option>
                <option value="DJ">DJ</option>
                <option value="Illusionist">Illusionist</option>
                <option value="Magician">Magician</option>
                <option value="Music Band">Music Band</option>
                <option value="Others">Others</option>
                <option value="Sculptures">Sculptures</option>
                <option value="Singer">Singer</option>
                <option value="Speaker">Speaker</option>
              </select>
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Email*:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                required
              />
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Website:</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
              />
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Contact Number*:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                required
              />
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                required
              />
            </div>

            <div className="mb-6 lg:mb-8">
              <label className="block text-black-700 mb-2 lg:mb-4">Upload Profile Photo:</label>
              <input
                type="file"
                name="profilePhoto"
                onChange={handleChange}
                className="w-full text-sm lg:text-base"
              />
            </div>

            <div className="mb-6 lg:mb-8">
              <label className="block text-black-700 mb-2 lg:mb-4">Upload ID Proof*:</label>
              <input
                type="text"
                name="idProof"
                value={formData.idProof}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                required
              />
            </div>

            <div className="mb-6 lg:mb-8">
              <label className="block text-black-700 mb-2 lg:mb-4">Description*:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
                required
              />
            </div>

            <div className="mb-6 lg:mb-8">
              <label className="block text-black-700 mb-2 lg:mb-4">Upload Work Photos:</label>
              <input
                type="file"
                name="workPhotos"
                onChange={handleWorkPhotosChange}
                multiple
                className="w-full text-sm lg:text-base"
              />
            </div>

            <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">Social Media Links:</h3>
            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Facebook:</label>
              <input
                type="url"
                name="socialLinks[facebook]"
                value={formData.socialLinks.facebook}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
              />
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Instagram:</label>
              <input
                type="url"
                name="socialLinks[instagram]"
                value={formData.socialLinks.instagram}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
              />
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Twitter:</label>
              <input
                type="url"
                name="socialLinks[twitter]"
                value={formData.socialLinks.twitter}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
              />
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-black-700 mb-2 lg:mb-4">Snapchat:</label>
              <input
                type="url"
                name="socialLinks[snapchat]"
                value={formData.socialLinks.snapchat}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 lg:px-4 lg:py-3"
              />
            </div>
            <div className="mb-6 lg:mb-8 flex items-center">
              <input
                type="checkbox"
                name="confirmation"
                checked={formData.confirmation}
                onChange={() => setFormData({ ...formData, confirmation: !formData.confirmation })}
                className="mr-2"
              />
              <label className="text-black-700">
                I confirm that the details provided are correct and complete.
              </label>
            </div>

            <div className="flex gap-4 gap-4 items-center justify-center">
              <button
                type="button"
                onClick={handleClear}
                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Clear
              </button>

              <button
                type="button"
                onClick={handleEditModeToggle}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
              >
                {isEditMode ? 'Save' : 'Edit'}
              </button>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`text-white px-4 py-2 rounded ${isFormValid ? 'bg-green-700 hover:bg-green-600' : 'bg-green-300 cursor-not-allowed'}`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>


      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          message="Registration Done Successfully !!!<br />Thank you for registering as an artist with us."
          onClose={closeModal}
        />
      )}


      <Footer />
    </div>
  );
};

export default ArtistRegistration;
