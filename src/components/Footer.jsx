import React from 'react';
import './Footer.css';
import logo from '../logo.svg'; // Import the logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>STÉ TUNIJAD SHOP</p>
          <p>Vous avez des questions ? Appelez-nous !</p>
          <p>58 888 757 / 58 88 06 05</p>
        </div>
        <div className="footer-right">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/products">Boutique</a></li>
            <li><a href="/wishlist">Liste de souhaits</a></li>
            <li><a href="/account">Mon compte</a></li>
            <li><a href="/cart">Panier</a></li>
            <li><a href="/privacy-policy">Politique de confidentialité</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Tunijad Shop - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;