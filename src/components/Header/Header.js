// IMPORT FILE
import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

// HEADER COMPONENT
const Header = () => {
    return (
        <div className = 'header'>
           <img src= {logo} alt="" srcset=""/>
           <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;

