import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="Logo">
      <Link to="/">
        <h1>
          fliptric
        </h1>
      </Link>
    </div>
  )
}

export default Logo;
