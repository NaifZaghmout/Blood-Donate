// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import UserSignupLogin from './components/UserSignupLogin/UserSignupLogin';
import StaffSignupLogin from './components/StaffSignupLogin/StaffSignupLogin';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/user" element={<UserSignupLogin />} />
    <Route path="/staff" element={<StaffSignupLogin />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>

  );
}

export default App;
