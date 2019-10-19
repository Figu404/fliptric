import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Product(props) {
  return (
    <div className="Product">
      <Link to="/product">
        <img src={props.img} alt="Skateboard"/>
        <h2>
          {props.title}
        </h2>
        <p>
          {props.price}
        </p>
        <p>
          Det här fungerar!!
        </p>
      </Link>
    </div>
  );
}

export default Product;
