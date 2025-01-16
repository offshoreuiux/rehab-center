/** @format */

import React, { useState, useEffect } from 'react';

const BackButtonModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const handlePopState = (e) => {
      if (!isConfirmed) {
        e.preventDefault();
        setIsModalOpen(true);
        window.history.pushState(null, null, window.location.href); // Prevent immediate navigation
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isConfirmed]);

  const handleConfirm = () => {
    setIsConfirmed(true); // Allow navigation
    window.history.back(); // Navigate back
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div>
      <h1>Back Button Modal Example</h1>

      {isModalOpen && (
        <div className="modal">
          <p>Are you sure you want to go back?</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      )}
    </div>
  );
};

export default BackButtonModal;
