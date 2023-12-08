// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import UserSignupLogin from './components/User-Singup-Login';
import StaffSignupLogin from './components/Staff-Singup-Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/user" element={<UserSignupLogin />} />
            <Route path="/staff" element={<StaffSignupLogin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;