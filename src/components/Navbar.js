// Updated Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';
import Categories from './Categories';


const Navbar = () => {
  
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="d-flex justify-content-around w-100">
        <Link to="/" className="logo">E-Shop</Link>
        <div className="nav-links col-10">
        <form className="d-flex w-100" role="search">
        
        <input className="form-control me-2 rounded-3 col-4 w-100 border border-dark" type="search submit" placeholder="Search" aria-label="Search"/>
        </form>
        <div className='d-flex'>
        
        {user ? (
            <>
              {/* <span className='text-white'>Welcome, {user.name}</span> */}
              <button onClick={logout} className='btn btn-warning'>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login"><img width="20" height="20" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1"/>Login</Link>
              {/* <Link to="/signup">WOMANS</Link> */}
            </>
          )}
          <Link to="/cart" className="cart-link">
            <FiShoppingCart />
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
            Cart
          </Link>
          </div>
        </div>
      </div>
      {user?.role === 'admin' && (
        <Link to="/admin">Admin Panel</Link>
      )}
      <Categories/>
    </nav>
  );
};

export default Navbar;