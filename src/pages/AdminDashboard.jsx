import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./AdminDashboard.css";  // Ensure this file exists
import { ProductContext } from "../context/ProductContext";

const AdminDashboard = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    imageUrl: null,
    price: "",
    description: ""
  });
  const [error, setError] = useState(""); // Initialize error state
  const navigate = useNavigate();
  const currentUser = "admin"; // TODO change this
  const { products, addProduct } = useContext(ProductContext);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleAddProduct = async () => {
    const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
  console.log("TOKEN " + token);
    if (newProduct.name.trim() && token) {
      try {
        const response = await fetch('http://localhost:5000/api/products', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token, // Include the token in the Authorization header
          },
          body: JSON.stringify({
            name: newProduct.name,
            price: newProduct.price,
            description: newProduct.description,
            imageUrl: newProduct.imageUrl,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("Product added successfully:", data);
          addProduct(newProduct); // Assuming addProduct updates the state or list of products
          setNewProduct({ name: "", imageUrl: null, price: "", description: "" }); // Reset the product form
        } else {
          const errorData = await response.json();
          console.error("Failed to add product:", errorData);
          setError(errorData.message || "Failed to add product");
        }
      } catch (err) {
        console.error("An error occurred while adding the product:", err);
        setError("An error occurred. Please try again.");
      }
    } else {
      setError("Product name is required and you must be logged in.");
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
                name="imageUrl"
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
                    {product.imageUrl && (
                      <img
                        src={URL.createObjectURL(product.imageUrl)}
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