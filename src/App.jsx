import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/Productdetails';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/" element={<Cards />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;