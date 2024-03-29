// src/index.js

import { Cloudinary } from 'cloudinary-core';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize Cloudinary with configuration options
// eslint-disable-next-line
const cloudinary = new Cloudinary({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
});


// async function enableMocking() {
//   if (process.env.NODE_ENV !== 'development') {
//     return
//   }

//   const { worker } = await import('./mocks/browser')


//   return worker.start()
// }


// Use window.onload to ensure Cloudinary is fully loaded
window.onload = () => {
  // enableMocking().then(()=>{
  const root = createRoot(document.getElementById('root')); 
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
// })
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  reportWebVitals();
};
