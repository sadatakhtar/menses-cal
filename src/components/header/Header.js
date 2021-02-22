import React from 'react'
import logo from '../../assets/calendar2.jpeg';
import './Header.css';

function Header() {
    return (
        <div className="header_container">
            <div className="header_logo">
                <img src={logo}  alt="logo" width="80px" height="80px"/>

            </div>
            <div className="header_title">
                <h1>Menses Calculator</h1>
            </div>
            <div className="header_links">
                <ul>
                    <li>Login</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>

            
        </div>
    )
}

export default Header
