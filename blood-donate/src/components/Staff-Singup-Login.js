import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import '../style/StaffSignupLogin.css';
import axios from 'axios';





const StaffSignupLogin = () => {
    const [isSignup, setSignup] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const [passwordError, setPasswordError] = useState('');
    const [password, setPassword ] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        setIsPasswordValid(password.length >= 8);
        setPasswordError(isPasswordValid ? '' : 'Password must be at least 8 characters');
    }, [password , isPasswordValid]);



    const handleSignup = async (email, username, password) => {
        try {
            await axios.post('https://8000-naifzaghmou-blooddonate-8h80369qfat.ws-us107.gitpod.io/api/register', {
                email,
                username,
                password,

            });
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    const handleLogin = async (email, username, password) => {
        try {
            await axios.post('https://8000-naifzaghmou-blooddonate-8h80369qfat.ws-us107.gitpod.io/api/login', {
                email,
                username,
                password
            });
        } catch (error) {
            console.error('Login failed:', error);

        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const email = event.target.email.value;
        const username = event.target.username.value;

        if (isSignup) {
            const confirmPassword = event.target.confirmPassword.value;
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                setLoading(false);
                return;
            }
            await handleSignup(email, username, password);
        } else {
            await handleLogin(email, username, password);
        }


        setLoading(false);
    };

    const toggleForm = () => {
        setSignup(!isSignup);
    };

    if (isLoading) {
        return <Loader />;
    }



    return (
        <div className="auth-container">
            <div className={`auth-form staff-form ${isSignup ? 'signup' : 'login'}`}>
                <h2>{isSignup ? 'Staff Signup' : 'Staff Login'}</h2>
                <form onSubmit={handleSubmit}>



                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input type="text" className="form-control" id="username" name="username" />
                    </div>



                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password (min 8 characters)"
                            onChange={(e) => setPassword(e.target.value)} 
                            disabled={!isSignup && password.length < 8}
                        />
                        {passwordError && <div className="alert alert-danger">{passwordError}</div>}
                    </div>

                    {isSignup && (
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmpassword"
                                disabled={password.length < 8}
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSignup && password.length < 8}
                    >
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

export default StaffSignupLogin;
