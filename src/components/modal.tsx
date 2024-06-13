import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md h-auto relative mx-auto">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-lg"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
