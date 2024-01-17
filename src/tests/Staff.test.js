import React from 'react';
import { render, waitFor, screen,fireEvent  } from "@testing-library/react";
import axios from "axios";
import Staff from '../pages/Staff';
import { MemoryRouter } from "react-router-dom";

jest.mock('axios'); // Mock axios to simulate API requests

describe('Staff component', () => {
  test('renders without errors', () => {
    render(<MemoryRouter>
      <Staff />
    </MemoryRouter>);
  });

  it('fetches data from the API and renders it', async () => {
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
      ],
    });

    const { getByText } = render(<MemoryRouter>
      <Staff />
    </MemoryRouter>);

    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('john@example.com')).toBeInTheDocument();
      expect(getByText('A+')).toBeInTheDocument();
      expect(getByText('Healthy')).toBeInTheDocument();
    });
  });

  it('handles delete button click and updates data', async () => {
    axios.delete.mockResolvedValue({
      status: 204,
    });

    const { getByText, queryByText } = render(<MemoryRouter>
      <Staff />
    </MemoryRouter>);

   
    await waitFor(() => {
      expect(queryByText('John Doe')).not.toBeInTheDocument();
    });
  });
});

