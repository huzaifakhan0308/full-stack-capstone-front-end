import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Home from './pages/home/Home';
import RoomList from './pages/RoomList';
import Reservations from './pages/Reservations';
import AddReservation from './pages/AddReservation';
// import NavbarPC from './components/NavbarPC';
import './App.css';
// import MobNav from './components/MobNav';
import AddRoom from './pages/AddRoom';
import Login from './pages/Login';
import Details from './pages/details/Details';

function App() {
  const isLoggedIn = !!localStorage.getItem('logged_user');
  return (
    <div className="App">
      <BrowserRouter>
        {/* {isLoggedIn && (
          <>
            <MobNav />
            <NavbarPC />
          </>
        )} */}
        <Routes>
          <Route
            path="/"
            exact
            element={
              isLoggedIn ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/login"
            exact
            element={
              isLoggedIn ? <Navigate to="/" replace /> : <Login />
            }
          />
          <Route
            path="/rooms"
            exact
            element={
              isLoggedIn ? <RoomList /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/reservations"
            exact
            element={
              isLoggedIn ? <Reservations /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/AddReservation/:id"
            exact
            element={
              isLoggedIn ? <AddReservation /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/addRoom"
            exact
            element={
              isLoggedIn ? <AddRoom /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/details/:id"
            exact
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
