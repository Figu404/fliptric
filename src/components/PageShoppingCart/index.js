import React from 'react';
import Navbar from "../Navbar";
import Footer from '../Footer';
import './style.css';
import skateboard1 from "../../assets/img/skateboard1.jpg"
import ShoppingCartItem from "../ShoppingCartItem";
import Button from '../Button';


function PageShoppingCart(props) {
  return (
    <div className="PageShoppingCart">
      <Navbar/>
      <div className="main">
        <h1 className="title">Varukorg</h1>
        <ul>
          <ShoppingCartItem  img={skateboard1} title="Kalle" price="200kr"/>
          <ShoppingCartItem  img={skateboard1} title="Kalle" price="200kr"/>
          <ShoppingCartItem  img={skateboard1} title="Kalle" price="200kr"/>
          <ShoppingCartItem  img={skateboard1} title="Kalle" price="200kr"/>
          <ShoppingCartItem  img={skateboard1} title="Kalle" price="200kr"/>
          <ShoppingCartItem  img={skateboard1} title="Kalle" price="200kr"/>
        </ul>
        <Button>Gå till kasssan</Button>
      </div>
      <Footer/>

    </div>
  );
}

export default PageShoppingCart;
