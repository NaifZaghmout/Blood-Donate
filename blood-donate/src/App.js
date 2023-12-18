// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import UserSignupLogin from './components/User-Singup-Login';
import StaffSignupLogin from './components/Staff-Singup-Login';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';


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
            <Route path="/NotFoundPage" element={<NotFoundPage />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;