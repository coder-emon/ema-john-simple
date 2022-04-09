import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <div className='linkwrap'>
                <a href="./shop">Shop</a>
                <a href="./review">Review Order</a>
                <a href="./manage">Manage Inventory Here</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;