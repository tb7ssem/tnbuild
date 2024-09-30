import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import './Cms.css';

const CMS = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="cms-page">
      <h1>CMS</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default CMS;
