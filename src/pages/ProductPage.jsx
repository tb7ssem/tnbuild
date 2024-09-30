import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductPage = () => {
  const { products } = useContext(ProductContext);

  console.log("Products in ProductPage:", products);

  return (
    <div className="product-page">
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.image && (
              <img
                src={URL.createObjectURL(product.image)}
                alt={product.name}
                width="100"
              />
            )}
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;