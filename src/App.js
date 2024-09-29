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
import CMS from "./pages/cms";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cms" element={<CMS />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
