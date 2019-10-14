import React from 'react';
import './style.css';

function Product(props) {
  return (
    <div className="Product">
      <img src={props.img} alt="Smiley face"/>
      <h2>
        {props.title}
      </h2>
      <p>
        {props.price}
      </p> 
    </div>
  );
}

export default Product;
