import React from 'react';
import Navbar from "../Navbar";
import Footer from '../Footer';
import './style.css';

import ChoppingCartItem from "../ChoppingCartItem";


function PageShoppingCart(props) {
  return (
    <div className="PageShoppingCart">
      <Navbar/>
      <div>
        <h1>
        Varukorg
      </h1>
      
      <ChoppingCartItem />
      </div>
      
      <Footer/>
    </div>
  );
}

export default PageShoppingCart;
