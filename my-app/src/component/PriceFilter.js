import React, { useState } from 'react';
import './priceFilter.css';

function PriceFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleMinPriceChange = (event) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  return (
    <div className="price-filter">
      <div className="price-header">
        <span className="price-title">Price Range</span>
      </div>
      <div className="price-controls">
        <label className="price-label">Min Price:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="price-slider"
        />
        <span className="price-value">${minPrice}</span>
      </div>
      <div className="price-controls">
        <label className="price-label">Max Price:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="price-slider"
        />
        <span className="price-value">${maxPrice}</span>
      </div>
    </div>
  );
}

export default PriceFilter;
