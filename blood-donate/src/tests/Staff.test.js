import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios'; // You might need to mock axios
import Staff from './pages/Staff';

jest.mock('axios'); // Mock axios to simulate API requests

describe('Staff component', () => {
  it('renders without errors', () => {
    render(<Staff />);
  });

  it('fetches data from the API and renders it', async () => {
    // Mock axios.get to return a sample response
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          patient_name: 'John Doe',
          patient_email: 'john@example.com',
          patient_phone_number: '1234567890',
          patient_blood_type: 'A+',
          patient_health_information: 'Healthy',
        },
        // Add more sample data as needed
      ],
    });

    const { getByText } = render(<Staff />);

    // Wait for the API response and check if data is rendered
    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('john@example.com')).toBeInTheDocument();
      expect(getByText('A+')).toBeInTheDocument();
      expect(getByText('Healthy')).toBeInTheDocument();
    });
  });

  it('handles delete button click and updates data', async () => {
    // Mock axios.delete to return a successful response
    axios.delete.mockResolvedValue({
      status: 204,
    });

    const { getByText, queryByText } = render(<Staff />);

    // Simulate a click on the delete button (you might need to find the correct selector)
    fireEvent.click(getByText('Delete'));

    // Wait for the API response and check if the data is updated (deleted)
    await waitFor(() => {
      expect(queryByText('John Doe')).not.toBeInTheDocument();
      // Check if other data items are still present or not
    });
  });
});

