// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize Cloudinary with configuration options
const cloudinary = require('cloudinary-core').Cloudinary.new({
  cloud_name: 'naif-zaghmout',
  api_key: '455581233943372',
  api_secret: 'jtk-1kO9F4FA178u2cqlY7gU4OQ',
});

// Use window.onload to ensure Cloudinary is fully loaded
window.onload = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  reportWebVitals();
};
