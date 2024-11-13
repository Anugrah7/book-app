import React from 'react';
import { Link } from 'react-router-dom'
import "../App.css";

const Header = ({ onSearchChange }) => {
  return (
    <div>
      <nav className='navbar'>
      <Link to={'/'} className='navLink'> Home</Link>
        <Link to={'/add'} className='navLink'> Add New Book</Link>
        <div className='siteName'>Word Wave</div>
        <Link to={'/category'} className='navLink'> Categories </Link>
        {/* Search Bar with Icon */}
        <div className='searchContainer'>
          
          <input
            type="text"
            placeholder="Search..."
            className='searchBar'
            onChange={(e) => onSearchChange(e.target.value)}
          />         
          
          <button className='searchIcon' aria-label="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
