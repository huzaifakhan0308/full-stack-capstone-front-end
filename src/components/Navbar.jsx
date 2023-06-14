import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <header className="Navbar">
    <nav>
      <img width="150" height="150" src="https://img.icons8.com/bubbles/200/home.png" alt="logo" />
      <ul>
        <li>HOME</li>
        <li>ROOMS</li>
        <li>MY RESERVATION</li>
        <li>DELETE RESERVATION</li>
      </ul>
    </nav>
    <h6>&#169; HOUSE RENT APP. 2023</h6>
  </header>
);

export default Navbar;
