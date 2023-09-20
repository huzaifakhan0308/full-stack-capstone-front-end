/* eslint-disable */
import React from 'react';
import {
  BrowserRouter, Route, Routes
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
            path="/login"
            children={<Login />}
          />
          <Route
            path="/abc"
            children={<Abc />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
