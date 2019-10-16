import React from 'react';
import Navbar from "../Navbar";
import Footer from '../Footer';
import './style.css';
import skateboard1 from "../../assets/img/skateboard1.jpg";

function PageProduct(props) {
  return (
    <div className="PageProduct">
      <Navbar/>
      <img src={skateboard1}/>
      <h1>Kalle</h1>
      <h2>SUPER-DUPER-REA!!</h2>

      <Footer/>
    </div>
  );
}

export default PageProduct;
