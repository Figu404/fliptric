import React from 'react';
import './style.css';
import Product from '../Product';
import skateboard1 from "../../assets/img/skateboard1.jpg";
import skateboard2 from "../../assets/img/skateboard2.jpg";

function Article() {
  return (
    <div className="Article">
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
    
  );
}

export default Article;
