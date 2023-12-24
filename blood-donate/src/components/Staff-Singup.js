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


};

export default Signup;