import React from 'react';
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import User from '../pages/User';
import axios from "axios";


import { MemoryRouter } from "react-router-dom";


jest.mock("axios");

const setup = async () => {
    render(
        <MemoryRouter>
            <User />
        </MemoryRouter>
    );
    await waitFor(() =>   expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });
};

describe('User Component', () => {
    test('renders initial message', async () => {
        await setup()

        expect(screen.getByText('Make a Difference with Your Donation')).toBeInTheDocument();

    });


    test('navigates to second step', async () => {
        await setup()

        fireEvent.click(screen.getByText('Next'));
        expect(screen.getByText('Ready to Be a Hero?')).toBeInTheDocument();
    });


    test('displays form for blood donation', async () => {
        await setup()

        fireEvent.click(screen.getByText('Next'));
        fireEvent.click(screen.getByText("Yes, I am Ready"));

        expect(screen.getByText('Blood Donation Application')).toBeInTheDocument();
    });

    test('submits form and shows submission message', async () => {
        await setup();
        axios.post.mockResolvedValue({ data: "Mock response data" });

        fireEvent.click(screen.getByText('Next'));
        fireEvent.click(screen.getByText("Yes, I am Ready"));

        fireEvent.change(screen.getByPlaceholderText('Enter Your Name'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Phone Number'), { target: { value: '1234567890' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Blood Type'), { target: { value: 'A+' } });
        fireEvent.change(screen.getByPlaceholderText('Write About Your Health Condition'), { target: { value: 'Healthy' } });

        fireEvent.click(screen.getByText('Submit Application'));

          await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith("api/createpatientblood/", {
                patient_name: 'John Doe',
                patient_email: 'john@example.com',
                patient_phone_number: '1234567890',
                patient_blood_type: 'A+',
                patient_health_information: 'Healthy',
            });
        });
    });
});
