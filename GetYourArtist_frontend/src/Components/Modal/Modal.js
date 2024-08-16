import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-white p-10 rounded-lg shadow-lg relative max-w-lg mx-auto transition-transform transform-gpu scale-100 duration-300 ease-in-out">
        {/* Green Circle in the Center */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <p 
          className="text-xl mb-4 text-center text-gray-800 font-semibold"
          dangerouslySetInnerHTML={{ __html: message }}
        />

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white text-red-700 border border-red-700 shadow-lg focus:outline-none hover:bg-red-200 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
