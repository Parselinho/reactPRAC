import React from 'react';

const Modal = ({ exercise, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
  };

  const handlePrev = () => {
    // logic to display previous exercise
  };

  const handleNext = () => {
    // logic to display next exercise
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>{exercise.name}</h2>
        <p>{exercise.description}</p>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Modal;