import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-logo">Pet Food Store</h1>
    <ul className="navbar-links">
      <li>
        <Link to="/" className="navbar-link">Inicio</Link>
      </li>
      <li>
        <Link to="/products" className="navbar-link">Productos</Link>
      </li>
      <li>
        <Link to="/about" className="navbar-link">Sobre Nosotros</Link>
      </li>
      <li>
        <Link to="/contact" className="navbar-link">Contacto</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
