import React from 'react';

const Product = ({ name, price, color, data = {} }) => {
  const hasSpecs = data.ram && data.rom && data.chip;

  return (
    <div className="product-card">
      <h1>Brand - {name}</h1>
      <h3>Price - ₹{price.toLocaleString()}</h3>
      <h3>Color - {color}</h3>

      {hasSpecs && (
        <div className="product-specs">
          <p>RAM: {data.ram}</p>
          <p>ROM: {data.rom}</p>
          <p>Chip: {data.chip}</p>
        </div>
      )}
    </div>
  );
};

export default Product;