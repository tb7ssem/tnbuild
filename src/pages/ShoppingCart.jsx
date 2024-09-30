import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { products } = useContext(ProductContext);

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2);
  };

  return (
    <div className="shopping-cart">
      <div className="cart-items">
        <h2>Shopping Bag</h2>
        <p>{products.length} items in your bag</p>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <img src={URL.createObjectURL(product.image)} alt={product.name} width="50" />
                  <div>{product.name}</div>
                  <div>{product.description}</div>
                </td>
                <td>${product.price}</td>
                <td>
                  <input type="number" defaultValue={1} min={1} />
                </td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-summary">
        <h2>Calculated Shipping</h2>
        <div className="shipping">
          <select>
            <option>Country</option>
            <option>USA</option>
            <option>Canada</option>
            <option>UK</option>
          </select>
          <input type="text" placeholder="ZIP Code" />
          <button>Update</button>
        </div>
        <h2>Coupon Code</h2>
        <div className="coupon">
          <input type="text" placeholder="Enter coupon code" />
          <button>Apply</button>
        </div>
        <h2>Cart Total</h2>
        <div className="total">
          <p>Cart Subtotal: ${calculateTotalPrice()}</p>
          <p>Shipping: $5.00</p>
          <p>Discount: $0.00</p>
          <p>Total: ${(parseFloat(calculateTotalPrice()) + 5).toFixed(2)}</p>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
