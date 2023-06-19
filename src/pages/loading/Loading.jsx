import React from 'react';
import { HashLoader } from 'react-spinners';
import './Loading.css';

const Loading = () => (
  <div className="loading-container">
    <HashLoader
      color="#d32b6c"
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);

export default Loading;
