import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserSignupLogin from '../components/User-Singup-Login';
import { BrowserRouter } from 'react-router-dom';

describe('UserSignupLogin Component', () => {
    const setup = async (isSignup = true) => {
        render(
            <BrowserRouter>
                <UserSignupLogin />
            </BrowserRouter>
        );
        await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 10000 });


        if (!isSignup) {
            fireEvent.click(screen.getByText('Login'));
        }
    };

    test('initially renders as a signup form', async() => {
        await setup();
        expect(await screen.getByText('User Signup')).toBeInTheDocument();
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Signup' })).toBeInTheDocument();
    });

    test('toggles to login form on link click', async() => {
        await setup();
        fireEvent.click(screen.getByText('Login'));
        expect(await screen.getByText('User Login')).toBeInTheDocument();
        expect(screen.queryByLabelText('Confirm Password')).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });

    test('renders login form correctly when toggled',async () => {
        await setup(false);
        expect(await screen.getByText('User Login')).toBeInTheDocument();
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.queryByLabelText('Confirm Password')).not.toBeInTheDocument();
    });

});
