import React from 'react';
import './style.css';
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import twitter from "../../assets/img/twitter.png";
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
      fliptrics affärskoncept går ut på att erbjuda mode och kvalitet till bästa pris på ett hållbart sätt. Sedan fliptric grundades 1947 har det vuxit och blivit ett av världens ledande modeföretag. Innehållet på denna webbplats är upphovsrättsskyddat och tillhör fliptric flip & tric AB.
     </p>
     <Logo/>
    </div>
  );
}

export default Footer;
