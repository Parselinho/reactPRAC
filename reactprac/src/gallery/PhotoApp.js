import React from 'react';
import PhotoSearch from './PhotoSearch';

const App = () => {
  return (
    <div>
      <h1>Unsplash Photo Search</h1>
      <PhotoSearch searchQuery="explore" />
    </div>
  );
};

export default App;
