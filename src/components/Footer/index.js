import React from 'react';
import './style.css';
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";
import Logo from "../Logo"

function Footer() {
  return (
    <div className="Footer">
     <ul>
       <li>
         <img src={facebook} alt="facebook"/>
       </li>
       <li>
        <img src={instagram} alt="instagram"/>
       </li>
       <li>
        <img src={twitter} alt="twitter"/>
       </li>
     </ul>
     <p>
      H&M:s affärskoncept går ut på att erbjuda mode och kvalitet till bästa pris på ett hållbart sätt. Sedan H&M grundades 1947 har det vuxit och blivit ett av världens ledande modeföretag. Innehållet på denna webbplats är upphovsrättsskyddat och tillhör H & M Hennes & Mauritz AB.
     </p>
     <Logo/>
    </div>
  );
}

export default Footer;
