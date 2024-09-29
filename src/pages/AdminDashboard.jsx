import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css"; // Ensure this file exists

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const navigate = useNavigate();
  const currentUser = "admin"; // TODO change this

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleAddProduct = () => {
    if (newProduct.trim()) {
      setProducts([...products, newProduct]);
      setNewProduct("");
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-sections">
        <div className="section">
          <h2>Manage Products</h2>
          <div className="product-management">
            <input
              type="text"
              value={newProduct}
              onChange={(e) => setNewProduct(e.target.value)}
              placeholder="Enter product name"
            />
            <button onClick={handleAddProduct}>Add Product</button>
            <ul>
              {products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section">
          <h2>Manage Orders</h2>
          {/* Add order management functionality */}
        </div>
        <div className="section">
          <h2>Manage Customers</h2>
          {/* Add customer management functionality */}
        </div>
        <div className="section">
          <h2>Website Settings</h2>
          {/* Add website settings functionality */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
