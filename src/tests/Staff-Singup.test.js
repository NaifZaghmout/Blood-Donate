import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Signup from '../components/Staff-Singup.js';

jest.mock('axios');

describe('Signup Component', () => {
  it('should render the Signup form', () => {
    const { getByLabelText, getByText } = render(<Signup />);
    
    const emailInput = getByLabelText('Email');
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm Password');
    const signUpButton = getByText('Sign Up');
    
    expect(emailInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  it('should display validation messages for invalid inputs', async () => {
    const { getByLabelText, getByText, findByText } = render(<Signup />);
    
    const emailInput = getByLabelText('Email');
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm Password');
    const signUpButton = getByText('Sign Up');
    
    fireEvent.click(signUpButton);
    
    await findByText('Password must be at least 8 characters long and not entirely numeric.');
    await findByText('Passwords do not match.');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
    
    fireEvent.click(signUpButton);
    
    const validationMessages = await Promise.all([
      findByText('Password must be at least 8 characters long and not entirely numeric.', { timeout: 1 }),
      findByText('Passwords do not match.', { timeout: 1 }),
    ]);
    
    expect(validationMessages).toEqual([null, null]);
  });
  
});

