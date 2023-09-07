import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  return (
    <nav className='header'>
      <img src={ logo } alt="logo" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Oders</Link>
        { user?.uid && <Link to="/inventory">Inventory</Link> }
        <Link to="/about">About</Link>
        {
          user?.uid ?
          <button onClick={ logOut } className='logout'>Logout</button>
          :
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </>
        
        }
        <span className='header-email'>{ user?.email }</span>
      </div>
    </nav>
  );
};

export default Header;