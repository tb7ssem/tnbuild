import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart, faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo from "../logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleMenu} />
          <Link to="/" className="nav-link" >
            Home
          </Link>
          <Link to="/products" className="nav-link" >
            Products
          </Link>
          <Link to="/admin" className="nav-link" >
            Admin Dashboard
          </Link>
        </nav>
      </div>
      <div className="header-middle">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <div className="header-right">
        
        <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        <Link to="/shoppingcart">
          <FontAwesomeIcon icon={faCartShopping} beat className="cart-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
