import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
    beforeEach(() => {
        // Mock localStorage.getItem to simulate no user being logged in
        Object.defineProperty(global.localStorage, 'getItem', {
            value: jest.fn(() => null),
            writable: true,
        });
    });

    afterEach(() => {
        // Restore the original localStorage.getItem behavior
        jest.restoreAllMocks();
    });

    test('navigates to the correct route on link click', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<div>Home Page</div>} />
                    <Route path="/aboutus" element={<div>About Us Page</div>} />
                    <Route path="/contactus" element={<div>Contact Us Page</div>} />
                    <Route path="/user" element={<div>User Page</div>} />
                    <Route path="/staff" element={<div>Staff Page</div>} />
                </Routes>
            </MemoryRouter>
        );

        await userEvent.click(screen.getByText('Home'));
        expect(await screen.findByText('Home Page')).toBeInTheDocument();

        await userEvent.click(screen.getByText('About Us'));
        expect(await screen.findByText('About Us Page')).toBeInTheDocument();

        await userEvent.click(screen.getByText('Contact Us'));
        expect(await screen.findByText('Contact Us Page')).toBeInTheDocument();

        // Clicking "Request for Donate" will set userDataShow to simulate user being logged in
        await userEvent.click(screen.getByText('Request for Donate'));
        expect(await screen.findByText('User Page')).toBeInTheDocument();

        // Now the "Staff" link should not be present
        expect(screen.queryByText('Staff')).toBeNull();
    });
});