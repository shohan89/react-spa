import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
  const {user} = useContext(AuthContext);
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
        <span>{ user?.name }</span>
      </div>
    </nav>
  );
};

export default Header;