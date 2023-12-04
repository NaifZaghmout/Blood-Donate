// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import UserSignupLogin from './UserSignupLogin/UserSignupLogin';
import StaffSignupLogin from './StaffSignupLogin/StaffSignupLogin';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/user" component={UserSignupLogin} />
        <Route path="/staff" component={StaffSignupLogin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
