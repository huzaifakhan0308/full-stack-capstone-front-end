/* eslint-disable */
import React from 'react';
import {
  HashRouter as Router, Routes, Route
} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Abc from './pages/abc';
import NotFound from './pages/notFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="/abc"
            element={<Abc />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
