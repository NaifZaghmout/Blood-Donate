import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StaffSignupLogin from '../components/Staff-Singup-Login';
import { BrowserRouter } from 'react-router-dom';

describe('StaffSignupLogin Component', () => {
    const setup = (isSignup = true) => {
        render(
            <BrowserRouter>
                <StaffSignupLogin />
            </BrowserRouter>
        );

        if (!isSignup) {
            fireEvent.click(screen.getByText('Login'));
        }
    };

    test('renders signup form by default', () => {
        setup();
        expect(screen.getByText('Staff Signup')).toBeInTheDocument();
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Signup' })).toBeInTheDocument();
    });

    test('toggles to login form', () => {
        setup();
        fireEvent.click(screen.getByText('Login'));
        expect(screen.getByText('Staff Login')).toBeInTheDocument();
        expect(screen.queryByLabelText('Confirm Password')).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });

    test('renders login form correctly', () => {
        setup(false);
        expect(screen.getByText('Staff Login')).toBeInTheDocument();
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.queryByLabelText('Confirm Password')).not.toBeInTheDocument();
    });

});
