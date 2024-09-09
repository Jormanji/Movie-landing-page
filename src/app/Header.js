"use client"
import React, { useState } from 'react';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="custom-header">
      <div className="site-title">MovieDB</div>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search movies..." />
        <button className="search-btn">Search</button>
      </div>

      <div className={`hamburger-menu ${isNavOpen ? 'active' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)}>
        &#9776;
      </div>

      <div className={`nav-bar ${isNavOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">People</a></li>
          <li><a href="#">More</a></li>
          <li className="user-options">
            <button className="login-btn">Sign In</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
