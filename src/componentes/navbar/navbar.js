import React from "react";
import "./navbar.css";

function NavBar (){
    return(
        <nav className="Nav">
            <a href="/">
            <img height="40" width="50" alt="logo" src="../../unnamed-recovered.jpg" /></a>
            <a href="/" className="site-title">UMirror</a>
            <ul>
                <li>
                    <a href="/Sobre">Sobre</a>
                </li>
                <li>
                    <a href="/extra">extra</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar