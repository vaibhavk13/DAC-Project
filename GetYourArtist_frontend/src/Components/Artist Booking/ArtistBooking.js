import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal';

const ArtistBooking = () => {

  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    category: '',
    artistType: '',
    eventDateTime: '',
    eventName: '',
    eventVenue: '',
    venueAddress: '',
    eventAttire: '',
    eventTheme: '',
    yourName: '',
    contactNumber: '',
    email: '',
    organization: '',
    designation: '',
    pricingDetails: [],
    equipment: '',
    paymentTerms: false,
    termsAgreement: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    const requiredFieldsFilled = formData.eventName && formData.eventVenue &&
      formData.venueAddress && formData.eventDateTime &&
      formData.yourName && formData.contactNumber &&
      formData.email && formData.organization && formData.designation;

    setIsFormValid(requiredFieldsFilled);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
      }));
    } else if (name === 'pricingDetails') {
      setFormData((prev) => ({
        ...prev,
        pricingDetails: prev.pricingDetails.includes(value)
          ? prev.pricingDetails.filter((item) => item !== value)
          : [...prev.pricingDetails, value]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setModalOpen(true);
  };

  const handleClear = () => {
    setFormData({
      id: '',
      firstName: '',
      lastName: '',
      category: '',
      artistType: '',
      eventDateTime: '',
      eventName: '',
      eventVenue: '',
      venueAddress: '',
      eventAttire: '',
      eventTheme: '',
      yourName: '',
      contactNumber: '',
      email: '',
      organization: '',
      designation: '',
      pricingDetails: [],
      equipment: '',
      paymentTerms: false,
      termsAgreement: false,
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };


  return (
    <div>
      <Navbar />

      <div className="container mx-auto mt-5 p-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl lg:p-10 lg:mt-10 bg-orange-100">
        <div className='bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md md:max-w-lg lg:max-w-4xl'>
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-red-700">
              Booking
            </h2>

            <section className="border border-red-200 p-4 rounded">
              <h2 className="text-xl font-semibold mb-4 text-orange-950">Event Details</h2>
              <label className="block mb-2">
                <span className="block font-medium">Event Theme:</span>
                <input
                  type="text"
                  name="eventTheme"
                  value={formData.eventTheme}
                  onChange={handleChange}
                  placeholder="Event Theme"
                  className="p-2 border rounded w-full"
                />
              </label>
              <label className="block mb-2">
                <span className="block font-medium">Name of Event:</span>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  placeholder="Name of Event"
                  className="p-2 border rounded w-full"
                  required
                />
              </label>
              <label className="block mb-2">
                <span className="block font-medium">Event Venue:</span>
                <input
                  type="text"
                  name="eventVenue"
                  value={formData.eventVenue}
                  onChange={handleChange}
                  placeholder="Event Venue"
                  className="p-2 border rounded w-full"
                  required
                />
              </label>
              <label className="block mb-2">
                <span className="block font-medium">Venue Address:</span>
                <input
                  type="text"
                  name="venueAddress"
                  value={formData.venueAddress}
                  onChange={handleChange}
                  placeholder="Venue Address"
                  className="p-2 border rounded w-full"
                  required
                />
              </label>
              <label className="block mb-2">
                <span className="block font-medium">Event Date & Time:</span>
                <input
                  type="datetime-local"
                  name="eventDateTime"
                  value={formData.eventDateTime}
                  onChange={handleChange}
                  className="p-2 border rounded w-full"
                  required
                />
              </label>
              <label className="block mb-2">
                <span className="block font-medium">Event Attire:</span>
                <input
                  type="text"
                  name="eventAttire"
                  value={formData.eventAttire}
                  onChange={handleChange}
                  placeholder="Event Attire"
                  className="p-2 border rounded w-full"
                />
              </label>
            </section>

            <section className="border p-4 rounded border-red-200">
              <h2 className="text-xl font-semibold mb-4 text-orange-950 ">Other Details - Event Organizer Details</h2>
              <label className="block mb-2">
                <span className="block font-medium">Full Name:</span>
                <input
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-2 border rounded w-full"
                  required
                />
              </label>
              <label className="block mb-2">
                <span className="block font-medium">Contact Number:</span>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="p-2 border rounded w-full"
                  required
                />
              </label>
              <label className="block mb-2">
                <span className="block font-medium">Email Id:</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Id"
                  className="p-2 border rounded w-full"
                  required
                />
              </label>
              <label className="block mb-2">
                <span className="block font-medium">Organization Name:</span>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization Name"
                  className="p-2 border rounded w-full"
                  required
                />
              </label>
              <label className="block mb-2">
                <span className="block font-medium">Designation:</span>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Designation"
                  className="p-2 border rounded w-full"
                  required
                />
              </label>
              <label className="block mb-2">
                <span className="block font-medium">Equipment Details:</span>
                <textarea
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleChange}
                  placeholder="Equipment Details"
                  className="p-2 border rounded w-full"
                  rows="4"
                />
              </label>
            </section>

            <section className="border p-4 rounded border-red-200">
              <h2 className="text-xl font-semibold mb-4 text-orange-950">Payment Terms</h2>
              <label className="block mb-2">
                <input
                  type="checkbox"
                  name="paymentTerms"
                  checked={formData.paymentTerms}
                  onChange={handleChange}
                  className="mr-2"
                  disabled={!isFormValid}
                />
                I agree to pay in full all financial obligations including travel expenses due to Artist to his performance.
              </label>
            </section>

            <section className="border p-4 rounded border-red-200">
              <h2 className="text-xl font-semibold mb-4 text-orange-950">Terms of Agreement</h2>
              <label className="block mb-2">
                <input
                  type="checkbox"
                  name="termsAgreement"
                  checked={formData.termsAgreement}
                  onChange={handleChange}
                  className="mr-2"
                  disabled={!isFormValid}
                />
                This contract is for services rendered by the Artist and may be canceled only in writing and within 48 hours of the signing of this contract.
              </label>
            </section>

            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={handleClear}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Clear Form
              </button>
              <button
                type="submit"
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isFormValid}
              >
                Submit
              </button>
              {isEditMode && (
                <button
                  type="button"
                  onClick={handleEdit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit Form
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          message="Your booking has been successfully completed!<br />Thank you for choosing us. We look forward to serving you."
          onClose={closeModal}
        />
      )}



      <Footer />
    </div>
  )
}

export default ArtistBooking
