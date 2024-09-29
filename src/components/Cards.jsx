import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = () => {
  const products = [
    { id: 1, name: 'Wireless Earbuds', price: 99.99, image: 'path/to/image1.jpg' },
    { id: 2, name: 'Smart Watch', price: 199.99, image: 'path/to/image2.jpg' }
    // Add more products as needed
  ];

  return (
    <div className="cards-container">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} className="card-image" />
          <h2 className="card-title">{product.name}</h2>
          <p className="card-price">${product.price.toFixed(2)}</p>
          <Link to={`/product/${product.id}`}>
            <button className="card-button">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
