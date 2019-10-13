import React from 'react';
import './style.css';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from '../Footer';
import Artlice from '../Article';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Artlice/>
      <Footer/>
    </div>
  );
}

export default App;
