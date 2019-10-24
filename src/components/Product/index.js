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
        <div className="prices">
          <p className={props.sale != null && "oldPrice"}>
            {props.price} kr
          </p>
          {props.sale != null && <p>{props.price - props.price*props.sale} kr</p>} 
             
        </div>
        {props.sale != null && <p className="sale">REA {props.sale*100}%</p>} 
      </Link>
    </div>
  );
}

export default Product;
