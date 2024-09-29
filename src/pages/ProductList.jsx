import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const products = [
        { id: 1, title: "Wireless Earbuds", price: "$99.99", image: "path/to/image1.jpg" },
        { id: 2, title: "Smart Watch", price: "$199.99", image: "path/to/image2.jpg" }
        // Add more products as needed
    ];

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <Link to={`/product/${product.id}`}>
                        <button className="view-details">View Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;