/* eslint-disable */
import React, { useEffect } from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
// import Home from './pages/home/Home';
// import RoomList from './pages/RoomList';
// import Reservations from './pages/Reservations';
// import AddReservation from './pages/AddReservation';
// import AddRoom from './pages/AddRoom';
// import Details from './pages/details/Details';
// import NavbarPC from './components/NavbarPC';
// import MobNav from './components/MobNav';
import './App.css';
import Login from './pages/Login';
import Abc from './pages/abc';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/abc"
            element={<Abc />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
