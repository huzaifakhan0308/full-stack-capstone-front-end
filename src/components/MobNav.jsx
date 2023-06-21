import React, { useState } from 'react';
import './MobNav.css';
import { Link } from 'react-router-dom';
import logo from '../assets/BookEase Logos/BookEase Logo White Text-01.png';
import logo2 from '../assets/BookEase Logos/BookEase Logo-01.png';

const MobNav = () => {
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
  const [show, setShow] = useState(false);
  return (
    <header className="MobNav">
      <img width="48" height="48" src={logo2} alt="logo2" />
      <button type="button" onClick={() => setShow(!show)}>
        <img width="48" height="48" src="https://img.icons8.com/glyph-neue/64/01013b/xbox-menu.png" alt="xbox-menu" />
      </button>
      {show
        && (
          <>
            <nav className="wrapper">
              <div className="img-links">
                <img width="100" height="100" src={logo} alt="logo" />
                <ul>
                  {links.map((l) => <li onClick={() => setShow(!show)} key={l.title}><Link to={l.path}>{l.title}</Link></li>)}
                  <li key="logout"><button className="logout" type="button" onClick={out}>LOGOUT</button></li>
                </ul>
              </div>
              <button type="button" onClick={() => setShow(!show)}>
                <img className="cross" width="48" height="48" src="https://img.icons8.com/material-sharp/48/ffffff/multiply-2.png" alt="multiply-2" />
              </button>
              <h6>&#169; HOUSE RENT APP. 2023</h6>
            </nav>
          </>
        )}
    </header>
  );
};

export default MobNav;
