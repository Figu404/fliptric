import React from 'react';
import Navbar from "../Navbar";
import Footer from '../Footer';
import './style.css';
import skateboard1 from "../../assets/img/skateboard1.jpg";
import Button from "../Button"

function PageProduct(props) {
  return (
    <div className="PageProduct">
      <Navbar/>
      <div className="Center">
        <img src={skateboard1} alt="Skateboard"/>
        <div>
          <h1>Kalle</h1>
          <h3> Pris: 100kr</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nunc maximus sapien molestie viverra. In hac habitasse platea dictumst. Nam a gravida mauris, rutrum maximus nulla. Nunc pretium efficitur turpis ac vulputate. Vestibulum erat lectus, facilisis eu felis vel, egestas consectetur quam. Integer venenatis nisi dolor, vel dignissim turpis vestibulum ac. Nunc in placerat lorem, id interdum tortor.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nunc maximus sapien molestie viverra. In hac habitasse platea dictumst. Nam a gravida mauris, rutrum maximus nulla. Nunc pretium efficitur turpis ac vulputate. Vestibulum erat lectus, facilisis eu felis vel, egestas consectetur quam. Integer venenatis nisi dolor, vel dignissim turpis vestibulum ac. Nunc in placerat lorem, id interdum tortor.
          </p>
          <Button> 
            Lägg i varukorgen
          </Button>
        </div> 
      </div>
      

      <Footer/>
    </div>
  );
}

export default PageProduct;
