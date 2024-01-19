import React from 'react';
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import UpdateDonor from '../pages/UpdateDonor.js';
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
jest.mock('axios');

const setup = async () => {
    render(
        <MemoryRouter>
            <UpdateDonor />
        </MemoryRouter>
    );
    await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });
};

describe('Update Donor Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders the component with title', async () => {
        await setup();
        expect(screen.getByText('DONORS INFORMATION')).toBeInTheDocument();
    });

    test('renders form with necessary fields and submit button', async () => {
        await setup();
        expect(screen.getByLabelText("Name :")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
        expect(screen.getByLabelText("Blood Type")).toBeInTheDocument();
    });

    test('handles form submission and API response', async () => {
        await setup();
        axios.put.mockResolvedValue({ data: "Mock response data" });

        fireEvent.change(screen.getByLabelText("Name :"), {
            target: { value: "testuser" },
        });
        fireEvent.change(screen.getByLabelText("Email"), {
            target: { value: "test@example.com" },
        });
        fireEvent.change(screen.getByLabelText("Phone Number"), {
            target: { value: "8745124512" },
        });
        fireEvent.change(screen.getByLabelText("Blood Type"), {
            target: { value: "A+" },
        });

    });
});
