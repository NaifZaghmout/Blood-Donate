// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import swal from "sweetalert";
import axios from "axios";

const Navbar = () => {

  const [userDataShow, setUserDataShow] = useState();
  useEffect(() => {
    const userDataString = localStorage.getItem("UserData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserDataShow(userData);
    } else {
      // console.log("No data found in local storage");
    }
  }, []);


  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("api/logout");

      swal({
        title: "Logout",
        text: "Logout Success",
        icon: "success",
        buttons: false,
        timer: 2000,
      });
      setTimeout(() => {
        localStorage.removeItem("UserData");
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      // console.error("Error during signup:", error);
    }
  };



  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/aboutus" className="navbar-link">About Us</Link>
        <Link to="/contactus" className="navbar-link">Contact Us</Link>
        {userDataShow && (
          <Link to="/staff" className="navbar-link">
            Staff
          </Link>
        )}
      </div>
      <div className="navbar-right">
        <Link to="/user" className="navbar-link">Request for Donate</Link>
          {userDataShow ? (
          <div className="logoutdiv" onClick={(e) => handleClick(e)}>
            Staff Logout
          </div>
        ) : (
          <>
            <Link to="/staff-signup" className="navbar-link">
              Staff Signup
            </Link>
            <Link to="/staff-login" className="navbar-link">
              Staff Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
