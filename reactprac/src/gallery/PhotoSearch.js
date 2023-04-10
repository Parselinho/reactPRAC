import React, { useState, useEffect } from 'react';
import { searchPhotos } from './UnsplashAPI';

const PhotoSearch = ({ searchQuery }) => {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await searchPhotos(searchQuery, 1, 10);
      if (data) {
        setPhotoList(data.results);
      }
    };

    fetchPhotos();
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      <div>
        {photoList.map((photo) => (
          <div key={photo.id}>
            <img src={photo.urls.small} alt={photo.user.name} />
            <p>Photo by {photo.user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSearch;
