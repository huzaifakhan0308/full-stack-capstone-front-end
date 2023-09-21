/* eslint-disable */
import React from 'react';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Abc from './pages/abc';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
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
