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
          <Link>
            Kompletta skatboards
          </Link>
        </li>
        <li>
          <Link>
            Brädor
          </Link>
        </li>
        <li>
          <Link>
            Hjul 
          </Link>
        </li>
        <li>
          <Link>
            Truckar
          </Link>
        </li>
        <li>
          <Link>
            Kulager
          </Link>
        </li>
        <li>
          <Link to="/ShoppingCart">
            Varukorg
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
