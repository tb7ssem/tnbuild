import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetails from "./pages/Productdetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
