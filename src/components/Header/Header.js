// IMPORT FILE
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

// HEADER COMPONENT
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className = 'header'>
           <img src= {logo} alt="" srcset=""/>
           <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory Here</Link>
                {
                loggedInUser.email && <button onClick={()=> setLoggedInUser({})}>Sign Out</button>
                }
                
            </nav>
        </div>
    );
};

export default Header;

