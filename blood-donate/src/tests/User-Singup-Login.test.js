import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserSignupLogin from '../components/User-Singup-Login';
import { BrowserRouter } from 'react-router-dom';

describe('UserSignupLogin Component', () => {
    const setup = (isSignup = true) => {
        render(
            <BrowserRouter>
                <UserSignupLogin />
            </BrowserRouter>
        );

        if (!isSignup) {
            fireEvent.click(screen.getByText('Login'));
        }
    };

    test('initially renders as a signup form', () => {
        setup();
        expect(screen.getByText('User Signup')).toBeInTheDocument();
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Signup' })).toBeInTheDocument();
    });

    test('toggles to login form on link click', () => {
        setup();
        fireEvent.click(screen.getByText('Login'));
        expect(screen.getByText('User Login')).toBeInTheDocument();
        expect(screen.queryByLabelText('Confirm Password')).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });

    test('renders login form correctly when toggled', () => {
        setup(false);
        expect(screen.getByText('User Login')).toBeInTheDocument();
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.queryByLabelText('Confirm Password')).not.toBeInTheDocument();
    });

});
