import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
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

        await act(async () => {
            await userEvent.click(screen.getByText('Home'));
        });
        await waitFor(() => expect(screen.getByText('Home Page')).toBeInTheDocument());

        await act(async () => {
            await userEvent.click(screen.getByText('About Us'));
        });
        await waitFor(() => expect(screen.getByText('About Us Page')).toBeInTheDocument());

        await act(async () => {
            await userEvent.click(screen.getByText('Contact Us'));
        });
        await waitFor(() => expect(screen.getByText('Contact Us Page')).toBeInTheDocument());

        await act(async () => {
            await userEvent.click(screen.getByText('User'));
        });
        await waitFor(() => expect(screen.getByText('User Page')).toBeInTheDocument());

        await act(async () => {
            await userEvent.click(screen.getByText('Staff'));
        });
        await waitFor(() => expect(screen.getByText('Staff Page')).toBeInTheDocument());
    });
});