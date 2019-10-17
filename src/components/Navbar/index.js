import React from 'react';
import './style.css';
import Logo from '../Logo';

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
      </ul>
    </div>
  );
}

export default Navbar;
