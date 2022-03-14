import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="logo" />
            <nav><a href="/shop">Shop</a><a href="/orders">Order</a><a href="/inventory">Manage Inventore</a></nav>
        </div>
    );
};

export default Header;