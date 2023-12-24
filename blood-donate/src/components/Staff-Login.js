import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Staff-Singup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Loader from './Loader';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const apiUrl = 'https://8000-naifzaghmou-blooddonate-8h80369qfat.ws-us107.gitpod.io/api/login';
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
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred during login.');
        }
    };
    
    
    
};

export default Login;