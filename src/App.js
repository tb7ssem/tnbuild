import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetails from "./pages/Productdetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from "./pages/ShoppingCart";
import Register from "./pages/Register"; // Import the Register component

function App() {
  return (
    <div className="App">
      <Router>
        {window.location.pathname !== "/login" ? <Header /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />{" "}
          {/* Add route for Register */}
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
        {window.location.pathname !== "/login" ? <Footer /> : null}
      </Router>
    </div>
  );
}

export default App;
