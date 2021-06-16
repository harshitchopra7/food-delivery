import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_left">
                <p>Logo</p>
            </div>
            <div className="navbar_right">
                <p>Hi, Harshit!</p>
                <p>Home</p>
                <p>Orders</p>
                <p>Login</p>
            </div>
        </div>
    )
}

export default Navbar;
