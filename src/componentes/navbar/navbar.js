import React from "react";
import "./navbar.css";
import menutoggle from "../botão/botao"

import logoGif from "./UmirrorLogoGif.gif"

function NavBar (){
    return(
        <nav className="Nav">
            <a href="/">
            <img height="40" width="70" src={logoGif} alt="logo"/></a>
            <ul>
                <div className="toggle" onClick={menutoggle}/>
            </ul>
        </nav>
    )
}

export default NavBar