import React from 'react';
import Photo from './Photo';

const Gallery = ({ exercises }) => {
  return (
    <div>
      {exercises.map((exercise, index) => (
        <Photo key={index} exercise={exercise} />
      ))}
    </div>
  );
};

export default Gallery;