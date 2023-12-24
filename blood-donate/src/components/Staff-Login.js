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

    
};

export default Login;