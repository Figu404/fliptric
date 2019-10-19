import React from 'react';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from '../Footer';
import './style.css';
import Product from '../Product';
import skateboard1 from "../../assets/img/skateboard1.jpg";
import skateboard2 from "../../assets/img/skateboard2.jpg";

function PageHome() {
  return (
    <div className="PageHome">
      <Navbar/>
      <Sidebar/>
      <div className="items">
        <Product img={skateboard1} title="Kalle" price="200kr"/>
        <Product img={skateboard2} title="Fredrik" price="100kr"/>
        <Product img={skateboard2} title="Fredrik" price="100kr"/>
        <Product img={skateboard2} title="Fredrik" price="100kr"/>
        <Product img={skateboard2} title="Fredrik" price="100kr"/>
        <Product img={skateboard2} title="Fredrik" price="100kr"/>
        <Product img={skateboard2} title="Fredrik" price="100kr"/>
        <Product img={skateboard2} title="Fredrik" price="100kr"/>
        <Product img={skateboard2} title="Fredrik" price="100kr"/>
        <Product img={skateboard2} title="Fredrik" price="100kr"/>
        <Product img={skateboard2} title="Fredrik" price="100kr"/>
        <Product img={skateboard2} title="fg" price="100kr"/>
        <Product img={skateboard2} title="tj" price="100kr"/>
      </div>
      <Footer/>
    </div>
  );
}

export default PageHome;
