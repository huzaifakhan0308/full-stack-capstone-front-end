import React, { useState } from 'react';
import './MobNav.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MobNav = (props) => {
  const { handleLogout } = props;

  const out = () => {
    handleLogout();
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
      <h2>HOUSE RENT APP</h2>
      <button type="button" onClick={() => setShow(!show)}>
        <img width="48" height="48" src="https://img.icons8.com/glyph-neue/64/ff5e00/xbox-menu.png" alt="xbox-menu" />
      </button>
      {show
        && (
          <>
            <nav className="wrapper">
              <div className="img-links">
                <img width="100" height="100" src="https://img.icons8.com/bubbles/100/home.png" alt="logo" />
                <ul>
                  {links.map((l) => <li key={l.title}><Link to={l.path}>{l.title}</Link></li>)}
                  <li key="logout"><button className="logout" type="button" onClick={out}>LOGOUT</button></li>
                </ul>
              </div>
              <h6>&#169; HOUSE RENT APP. 2023</h6>
            </nav>
            <button type="button" onClick={() => setShow(!show)}>
              <img className="cross" width="48" height="48" src="https://img.icons8.com/material-sharp/48/ffffff/multiply-2.png" alt="multiply-2" />
            </button>
          </>
        )}
    </header>
  );
};

MobNav.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default MobNav;
