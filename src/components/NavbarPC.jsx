import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/BookEase Logos/BookEase Logo White Text-01.png';

const Navbar = () => {
  const out = () => {
    localStorage.removeItem('logged_user');
    localStorage.removeItem('user_data');
    window.location.reload();
  };

  const links = [
    { title: 'HOME', path: '/' },
    { title: 'MY ROOMS', path: '/rooms' },
    { title: 'MY RESERVATION', path: '/reservations' },
    { title: 'ADD A ROOM', path: '/addRoom' },
  ];

  return (
    <header className="Navbar">
      <nav>
        <img width="130" height="130" src={logo} alt="logo" />
        <hr style={{ width: '100%' }} />
        <ul>
          {links.map((l) => <li key={l.title}><Link to={l.path}>{l.title}</Link></li>)}
          <li key="logout"><button className="logout" type="button" onClick={out}>LOGOUT</button></li>
        </ul>
      </nav>
      <h6>&#169; HOUSE RENT APP. 2023</h6>
    </header>
  );
};

export default Navbar;
