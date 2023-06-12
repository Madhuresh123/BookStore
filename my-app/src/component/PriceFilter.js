import React, { useContext } from 'react';
import './priceFilter.css';
import NoteContext from "../context/NoteContext";


function PriceFilter() {
  const context = useContext(NoteContext);
  const { maxPrice, setMaxPrice } = context;

  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  return (
    <div className="price-filter">
      <div className="price-header">
        <span className="price-title">Price Range</span>
      </div>

      <div className="price-controls">
        <label className="price-label">Price:</label>
       
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="price-slider"
        />
        <span className="price-value">₹{maxPrice}</span>
      </div>

    </div>
  );
}

export default PriceFilter;
