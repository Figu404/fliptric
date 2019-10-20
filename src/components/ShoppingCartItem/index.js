import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function ShoppingCartItem(props) {
  return (
    <li className="ShoppingCartItem">
      <Link to="/product">
        <img src={props.img} alt="Skateboard"/>
      </Link> 
      <h2 className="title">
        {props.title}
      </h2>
      <p className="price">
        {props.price}
      </p>
      <div className="description">
        <p>
        två stycken fhdjskla hfjdskl hfjdkslah fjdkslafh jdsklah fjdska
        </p>
        <p>
          lorem jfdsklöf jkdlaöfj kdsöaj fkldsöaj fklödsaj kflöds
        </p>
      </div>
      
      <div className="delete">
        <p>
          Ta bort
        </p>
      </div>
    </li>
  );
}

export default ShoppingCartItem;
