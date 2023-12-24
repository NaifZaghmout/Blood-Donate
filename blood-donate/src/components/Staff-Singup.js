import React, { useState, useEffect } from 'react';
import '../style/Staff-Singup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import Loader from './Loader';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [isLoading, setIsLoading] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const validatePassword = (password) => {
        const minLength = 8;
        const isLongEnough = password.length >= minLength;
        const isNotNumericOnly = isNaN(password);
        return isLongEnough && isNotNumericOnly;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handlePasswordChange = (e) => {
        const password = e.target.value;
        const valid = validatePassword(password);
        setIsPasswordValid(valid);
        handleChange(e);
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        setIsConfirmPasswordValid(confirmPassword === formData.password);
        handleChange(e);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = 'https://8000-naifzaghmou-blooddonate-8h80369qfat.ws-us107.gitpod.io/api/register';
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                window.location.href = '/';
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Container className="mt-5 custom-container">
            <h1 className="signup-heading">Staff Sign-Up</h1>
            <Form className="custom-form" onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        className="custom-form-control"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        className="custom-form-control"
                        type="text"
                        placeholder="Choose a username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className={`custom-form-control ${!isPasswordValid ? 'invalid-password' : ''}`}
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {!isPasswordValid && (
                        <div className="password-warning">
                            <small>
                                Password must be at least 8 characters long and not entirely numeric.
                            </small>
                        </div>
                    )}
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        className="custom-form-control"
                        type="password"
                        placeholder="Confirm your password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                    {!isConfirmPasswordValid && (
                        <div className="validation-message">
                            Passwords do not match.
                        </div>
                    )}
                </Form.Group>

                <Button
                    className="custom-button"
                    variant="primary"
                    type="submit"
                    disabled={!isPasswordValid || !isConfirmPasswordValid}>
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
};




export default Signup;