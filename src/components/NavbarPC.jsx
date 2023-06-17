import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavbarPC.css';

const Navbar = (props) => {
  const { handleLogout } = props;

  const out = () => {
    handleLogout();
  };

  const links = [
    { title: 'HOME', path: '/' },
    { title: 'ROOMS', path: '/rooms' },
    { title: 'MY RESERVATION', path: '/reservations' },
    { title: 'DELETE RESERVATION', path: '/delete' },
    { title: 'ADD A ROOM', path: '/addRoom' },
  ];

  return (
    <header className="Navbar">
      <nav>
        <img width="150" height="150" src="https://img.icons8.com/bubbles/200/home.png" alt="logo" />
        <ul>
          {links.map((l) => <li key={l.title}><Link to={l.path}>{l.title}</Link></li>)}
          <li key="logout"><button className="logout" type="button" onClick={out}>LOGOUT</button></li>
        </ul>
      </nav>
      <h6>&#169; HOUSE RENT APP. 2023</h6>
    </header>
  );
};

Navbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Navbar;
