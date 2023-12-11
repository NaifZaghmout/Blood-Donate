// Staff-Signup-Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/StaffSignupLogin.css';
import Loader from './Loader';


const StaffSignupLogin = () => {
    const [isSignup, setSignup] = useState(true);

    const toggleForm = () => {
        setSignup(!isSignup);
    };

    return (
        <div className="auth-container">
            <div className={`auth-form staff-form ${isSignup ? 'signup' : 'login'}`}>
                <h2>{isSignup ? 'Staff Signup' : 'Staff Login'}</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input type="text" className="form-control" id="username" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control" id="password" />
                    </div>

                    {isSignup && (
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirm Password
                            </label>
                            <input type="password" className="form-control" id="confirmPassword" />
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary">
                        {isSignup ? 'Signup' : 'Login'}
                    </button>
                </form>

                <p>
                    {isSignup ? 'Already have an account?' : 'Don’t have an account?'}{' '}
                    <Link onClick={toggleForm}>{isSignup ? 'Login' : 'Signup'}</Link>
                </p>

            </div>

        </div>

    );
};

export default StaffSignupLogin;