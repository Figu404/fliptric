import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">
        <h1>
          fliptric
        </h1>
      </Link>
      
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
      </ul>
    </div>
  );
}

export default Navbar;
