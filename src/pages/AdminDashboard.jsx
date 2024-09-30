import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./AdminDashboard.css";  // Ensure this file exists
import { ProductContext } from "../context/ProductContext";

const AdminDashboard = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: null,
    price: "",
    description: ""
  });
  const navigate = useNavigate();
  const currentUser = "admin"; // TODO change this
  const { products, addProduct } = useContext(ProductContext);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleAddProduct = () => {
    if (newProduct.name.trim()) {
      addProduct(newProduct);
      setNewProduct({ name: "", image: null, price: "", description: "" });
      console.log("Product added from AdminDashboard:", newProduct);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      image: file
    }));
  };

  return (
    <>
      <div className="admin-dashboard">
        <h1>
           Admin Dashboard
        </h1>
       
        <div className="dashboard-sections">
          <div className="section">
            <h2>Manage Products</h2>
            <div className="product-management">
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
                placeholder="Enter product name"
              />
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                placeholder="Upload product image"
              />
              <input
                type="number"  
                name="price"
                value={newProduct.price}
                onChange={handleChange}
                placeholder="Enter product price"
                
              />
              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                placeholder="Enter product description"
              />
              <button onClick={handleAddProduct}>Add Product</button>
              <ul>
                {products.map((product, index) => (
                  <li key={index}>
                    {product.image && (
                      <img
                        src={URL.createObjectURL(product.image)}
                        alt={product.name}
                        width="50"
                      />
                    )}
                    <div>{product.name}</div>
                    <div>{product.price} TND</div>  
                    <div>{product.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="section">
            <h2>Manage Orders</h2>
            {/* Add order management functionality */}
          </div>
         
          <div className="section">
            <h2>Website Settings</h2>
            {/* Add website settings functionality */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;