// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import UserSignupLogin from './User-Singup-Login'; // Adjust the path
import StaffSignupLogin from './Staff-Singup-Login'; // Adjust the path

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
