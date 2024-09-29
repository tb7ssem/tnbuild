import React from 'react';
import Cards from '../components/Cards';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      <main className="products-main">
        <h1>Our Products</h1>
        <Cards />
      </main>
    </div>
  );
};

export default Products;