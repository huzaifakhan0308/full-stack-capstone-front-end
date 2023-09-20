/* eslint-disable */
import React, { useEffect } from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Home from './pages/home/Home';
import RoomList from './pages/RoomList';
import Reservations from './pages/Reservations';
import AddReservation from './pages/AddReservation';
import NavbarPC from './components/NavbarPC';
import './App.css';
import MobNav from './components/MobNav';
import AddRoom from './pages/AddRoom';
import Login from './pages/Login';
import Details from './pages/details/Details';

function App() {
  const isLoggedIn = !!localStorage.getItem('logged_user');
  
  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && (
          <>
            <MobNav />
            <NavbarPC />
          </>
        )}
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Home /> : ""
            }
          />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
          <Route
            path="/rooms"
            element={
              isLoggedIn ? <RoomList /> : ""
            }
          />
          <Route
            path="/reservations"
            element={
              isLoggedIn ? <Reservations /> : ""
            }
          />
          <Route
            path="/AddReservation/:id"
            element={
              isLoggedIn ? <AddReservation /> : ""
            }
          />
          <Route
            path="/addRoom"
            element={
              isLoggedIn ? <AddRoom /> : ""
            }
          />
          <Route
            path="/details/:id"
            element={
              isLoggedIn ? <Details /> : ""
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
