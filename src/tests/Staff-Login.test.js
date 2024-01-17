import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // You might need to mock axios
import Login from '../components/Staff-Login.js';


jest.mock('axios'); // Mock axios to simulate API requests

describe('Login component', () => {
  it('renders without errors', () => {
    render(<Login />);
  });

  it('handles form submission and API response', async () => {
    // Mock axios.post to return a successful response
    axios.post.mockResolvedValue({ data: 'Mock response data' });

    const { getByLabelText, getByText } = render(<Login />);

    // Fill in the form fields
    fireEvent.change(getByLabelText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(getByText('Login'));

    // Wait for the API response
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('api/login', {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      });
    });

    // Verify that the success message is displayed
    expect(getByText('Login Successfully')).toBeInTheDocument();
  });
});

