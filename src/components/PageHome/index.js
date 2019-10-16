import React from 'react';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from '../Footer';
import Article from '../Article';
import './style.css';

function PageHome() {
  return (
    <div className="PageHome">
      <Navbar/>
      <Sidebar/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default PageHome;
