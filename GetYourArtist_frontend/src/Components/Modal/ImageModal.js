import React from 'react';
import ReactDOM from 'react-dom';

const ImageModal = ({ isOpen, onClose, imageSrc, title }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
      onClick={onClose}
    >
      <div 
        className="bg-white p-6 rounded-lg relative max-w-2xl w-full" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-3 right-3 text-gray-700 text-2xl font-bold" 
          onClick={onClose}
        >
          &times;
        </button>
        <div className="relative overflow-auto max-h-96">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-auto max-h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;
