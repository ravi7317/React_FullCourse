import React from 'react';

const Product = ({ name, price, color, data={} }) => {
  return (
    <div>
      <h1>Brand - {name}</h1>
      <h3>Price - {price}</h3>
      <h3>Color - {color}</h3>
      {/* for not showing Key in output */}
{data.ram && data.rom && data.chip &&(<>
      <p>RAM = {data.ram}</p>
      <p>ROM = {data.rom}</p>
      <p>Chip = {data.chip}</p>
      </>
)}
    </div>

  );
};

export default Product;