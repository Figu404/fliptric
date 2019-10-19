import React from 'react';
import './style.css';
import Logo from '../Logo';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <Logo/>
      <ul>
        <li>
          Kompletta skatboards
        </li>
        <li>
          Brädor
        </li>
        <li>
          Hjul
        </li>
        <li>
          Truckar
        </li>
        <li>
          Kulager
        </li>
        <li>
          <Link to="/ShoppingCart">
            Shopping Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
