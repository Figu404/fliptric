import React from 'react';
import './style.css';
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";

function Footer() {
  return (
    <div className="Footer">
     <ul>
       <li>
         <img src={facebook}/>
       </li>
       <li>
        <img src={instagram}/>
       </li>
       <li>
        <img src={twitter}/>
       </li>
     </ul>
     <p>
      H&M:s affärskoncept går ut på att erbjuda mode och kvalitet till bästa pris på ett hållbart sätt. Sedan H&M grundades 1947 har det vuxit och blivit ett av världens ledande modeföretag. Innehållet på denna webbplats är upphovsrättsskyddat och tillhör H & M Hennes & Mauritz AB.
     </p>
     <h1>
       fliptric
     </h1>
    </div>
  );
}

export default Footer;
