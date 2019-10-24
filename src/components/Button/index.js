import React from 'react';
import './style.css';

function Button(props) {
  return (
    <button className={props.small ? "Button small" : "Button"}>
      {props.children}
    </button>
  );
}

export default Button;
