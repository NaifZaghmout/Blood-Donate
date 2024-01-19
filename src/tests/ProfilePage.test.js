import React from 'react';
import { render, waitFor, screen } from "@testing-library/react";
import ProfilePage from '../pages/ProfilePage.js';
import { MemoryRouter } from "react-router-dom";
jest.mock('axios');

const setup = async () => {
    render(
        <MemoryRouter>
            <ProfilePage />
        </MemoryRouter>
    );
    await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });
};

describe('profile page Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders the component with title', async () => {
        await setup();
        expect(screen.getByText('Email Id')).toBeInTheDocument();
    });

    test('renders form with necessary fields and submit button', async () => {
        await setup();
        expect(screen.getByText("Email Id")).toBeInTheDocument();
        expect(screen.getByText("Staff Id")).toBeInTheDocument();
        expect(screen.getByText("Edit")).toBeInTheDocument();
       
    });
});
