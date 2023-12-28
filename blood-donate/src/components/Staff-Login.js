import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Staff-Singup-Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Loader from './Loader';
import { BACKEND_API_URL } from '../Environment';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '', 
        password: '',
    });

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const apiUrl = `${BACKEND_API_URL}api/login`;
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                window.location.href = '/staff';
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred during login.');
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Container className="mt-5 custom-container">
            <h1 className="login-heading">Staff Login</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form className="custom-form" onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        className="custom-form-control"
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

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

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className="custom-form-control"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button
                    className="custom-button"
                    variant="primary"
                    type="submit">
                    Login
                </Button>
                <div className="login-signup-link">
                Don't have an account? <Link to="/staff-signup">Sign up here</Link>
            </div>
            </Form>
            
        </Container>
    );
};

export default Login;
