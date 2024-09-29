import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/admin" className="nav-link">
            Admin Dashboard
          </Link>
        </nav>
      </div>
      <div className="header-right">
        <Link to="/login" className="login-button">
          Login
        </Link>
        <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      </div>
    </header>
  );
};

export default Header;
