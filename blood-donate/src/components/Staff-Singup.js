import React, { useState } from 'react';
import '../style/Staff-Singup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    
};

export default Signup;