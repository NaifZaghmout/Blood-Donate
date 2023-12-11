import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/UserSignupLogin.css';
import Loader from './Loader';




const UserSignupLogin = () => {
    const [isSignup, setSignup] = useState(true);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const toggleForm = () => {
        setSignup(!isSignup);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="auth-container">
            <div className={`auth-form user-form ${isSignup ? 'signup' : 'login'}`}>
                <h2>{isSignup ? 'User Signup' : 'User Login'}</h2>
                <form onSubmit={handleSubmit}>
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
                    <Link to="#" onClick={toggleForm}>{isSignup ? 'Login' : 'Signup'}</Link>
                </p>
            </div>
        </div>
    );
};

export default UserSignupLogin;
