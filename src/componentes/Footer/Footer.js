import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './Footer.css'
import React from 'react'

function Footer(){
    return (
        <div className='wrapper'>
        <footer className="footer">
            <ul className="social_list">
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
            </ul>
            <p className="copy_right"><span>uMirror</span> &copy; 2022</p>
        </footer>
        </div>
    )
}

export default Footer