import React from 'react';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from '../Footer';
import './style.css';
import Product from '../Product';
import skateboard1 from "../../assets/img/skateboard1.jpg";
import skateboard2 from "../../assets/img/skateboard2.jpg";
import skateboard3 from "../../assets/img/skateboard3.jpg";
import skateboard4 from "../../assets/img/skateboard4.jpg";
import skateboard5 from "../../assets/img/skateboard5.jpg";
import skateboard6 from "../../assets/img/skateboard6.jpg";
import skateboard7 from "../../assets/img/skateboard7.jpg";

function PageHome() {
  return (
    <div className="PageHome">
      <Navbar/>
      <Sidebar/>
      <div className="items">
        <Product img={skateboard1} title="Kalle" price={200} sale={0.5}/>
        <Product img={skateboard2} title="Bertil" price={120} sale={0.2}/>
        <Product img={skateboard3} title="Fredrik" price={240}/>
        <Product img={skateboard4} title="Per-erik" price={230} sale={0.4}/>
        <Product img={skateboard5} title="Niklas" price={300}/>
        <Product img={skateboard6} title="Karlson" price={1000}/>
        <Product img={skateboard7} title="Åke" price={400}/>
        <Product img={skateboard4} title="Maja" price={800} sale={0.9}/>
        <Product img={skateboard1} title="Lisa" price={400} sale={0.1}/>
        <Product img={skateboard2} title="Felizia" price={700}/>
        <Product img={skateboard5} title="håkan" price={200}/>
        <Product img={skateboard3} title="Pelle" price={100}/>
        <Product img={skateboard4} title="Max" price={300}/>
      </div>
      <Footer/>
    </div>
  );
}

export default PageHome;
