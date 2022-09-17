import React from "react";
import "./navbar.css";
import menutoggle from "../botão/botao"

function NavBar (){
    return(
        <nav className="Nav">
            <a href="/">
            <img height="40" width="50" alt="logo" src="../../unnamed-recovered.jpg" /></a>
            <ul>
                <div className="toggle" onClick={menutoggle}/>
            </ul>
        </nav>
    )
}

export default NavBar