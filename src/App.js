/* eslint-disable */
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
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
  const isLoggedIn = localStorage.getItem('logged_user') ? true : false;
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
              isLoggedIn ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/rooms"
            element={
              isLoggedIn ? <RoomList /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/reservations"
            element={
              isLoggedIn ? <Reservations /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/AddReservation/:id"
            element={
              isLoggedIn ? <AddReservation /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/addRoom"
            element={
              isLoggedIn ? <AddRoom /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/details/:id"
            element={
              isLoggedIn ? <Details /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
