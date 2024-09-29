import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../logo.svg'; // Update this path to your actual SVG file

const Header = () => {
  // Hook to access authentication context
  const { currentUser, logout } = useAuth();

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  // Render the header component
  return (
    <header className="header">
      <div className="header-left">
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          {currentUser && (
            <Link to="/admin/dashboard" className="nav-link">Admin Dashboard</Link>
          )}
        </nav>
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      </div>
    </header>
  );
};

export default Header;