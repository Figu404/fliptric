import React from 'react';
import './style.css';


function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <h1>
            fliptric
          </h1>
        </li>
        <li className="Searchbar">
          <input type="text" placeholder="Sök.." name="search"/>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
