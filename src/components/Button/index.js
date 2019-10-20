import React from 'react';
import './style.css';

function Button(props) {
  return (
    <button className="Button">
      {props.children}
    </button>
  );
}

export default Button;
