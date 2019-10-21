import React from 'react';
import './style.css';

function Button(props) {
  return (
    <button className={props.small ? "Button small" : "Button"}>
      {props.children}
      <br/>
      {0.5 * 100}
      {true && <p>Detta visas</p>}
      {props.sale !== null && <p>Visas kanske</p>}
      {true ? <p>Detta visas</p> : <p>Detta visas inte</p>}
      {true && <div>
        <p>Flera</p>
        <p>Saker</p>
      </div>}
    </button>
  );
}

export default Button;
