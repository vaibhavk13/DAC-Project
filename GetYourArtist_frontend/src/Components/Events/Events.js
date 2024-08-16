import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ImageModal from '../Modal/ImageModal';
import events from '../../Constants/events';

const Events = () => {
  const [expandedEventId, setExpandedEventId] = useState(null);
  const [modalData, setModalData] = useState({ isOpen: false, imageSrc: '', title: '' });

  const toggleDescription = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  const openModal = (imageSrc, title) => {
    setModalData({ isOpen: true, imageSrc, title });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, imageSrc: '', title: '' });
  };

  return (
    <div>
      <Navbar />

      <section className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-8">Upcoming Events</h2>

          {/* Display all events */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
              >
                <img 
                  src={event.src} 
                  alt={event.title} 
                  className="w-full h-64 object-cover cursor-pointer"
                  onClick={() => openModal(event.src, event.title)}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-red-700">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.date}</p>
                  <p className="text-gray-700 mb-4">
                    {expandedEventId === event.id 
                      ? event.description 
                      : ''
                    }
                    <button 
                      onClick={() => toggleDescription(event.id)} 
                      className="text-blue-500 underline ml-2"
                    >
                      {expandedEventId === event.id ? 'Read Less' : 'Read More'}
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          <ImageModal 
            isOpen={modalData.isOpen} 
            onClose={closeModal} 
            imageSrc={modalData.imageSrc} 
            title={modalData.title}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
