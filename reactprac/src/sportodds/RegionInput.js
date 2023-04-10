import React from 'react';

const RegionInput = ({ region, handleRegionChange }) => {
  return (
    <div>
      <label htmlFor="region-input">Region:</label>
      <input
        id="region-input"
        type="text"
        value={region}
        onChange={handleRegionChange}
      />
    </div>
  );
};

export default RegionInput;
