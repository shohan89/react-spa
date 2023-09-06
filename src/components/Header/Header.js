import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header'>
      <img src={ logo } alt="logo" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Oders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </nav>
  );
};

export default Header;