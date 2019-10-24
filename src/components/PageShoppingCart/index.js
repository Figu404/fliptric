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
      <h1 className="title">Varukorg</h1>
      <div className="x">
        <div className="y">
          
          <ul>
            <ShoppingCartItem  img={skateboard1} title="Kalle" price={200} sale={0.5}/>
            <ShoppingCartItem  img={skateboard1} title="Kalle" price={200}/>
            <ShoppingCartItem  img={skateboard1} title="Kalle" price={200}/>
            <ShoppingCartItem  img={skateboard1} title="Kalle" price={200}/>
            <ShoppingCartItem  img={skateboard1} title="Kalle" price={200}/>
            <ShoppingCartItem  img={skateboard1} title="Kalle" price={200}/>
          </ul>
        </div>
        <div className="information">
          <Button className="checkout">Gå till kasssan</Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PageShoppingCart;
