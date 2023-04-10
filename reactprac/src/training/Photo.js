import React, { useState } from 'react';
import Modal from './Modal';

const Photo = ({ exercise }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <img src={exercise.thumbnail} alt={exercise.name} onClick={handleClick} />
      {showModal && <Modal exercise={exercise} setShowModal={setShowModal} />}
    </div>
  );
};

export default Photo;