import React from 'react';
import { render, screen } from '@testing-library/react';
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
                    <Route path="/staff" element={<div>Staff Page</div>} />
                    <Route path="/user" element={<div>User Page</div>} />
                </Routes>
            </MemoryRouter>
        );

        // await userEvent.click(screen.getByText('Home'));
        // expect(await screen.findByText('Home Page')).toBeInTheDocument();

        const homeLink = screen.getByText('Home');
        expect(homeLink).toBeInTheDocument();
        userEvent.click(homeLink);
        expect(await screen.findByText('Home Page')).toBeInTheDocument();


        // await userEvent.click(screen.getByText('About Us'));
        // expect(await screen.findByText('About Us Page')).toBeInTheDocument();

        const aboutLink = screen.getByText('About Us');
        expect(aboutLink).toBeInTheDocument();
        userEvent.click(aboutLink);
        expect(await screen.findByText('About Us Page')).toBeInTheDocument();

        await userEvent.click(screen.getByText('Contact Us'));
        expect(await screen.findByText('Contact Us Page')).toBeInTheDocument();

        await userEvent.click(screen.getByText('Request for Donate'));
        expect(await screen.findByText('User Page')).toBeInTheDocument();

        await userEvent.click(screen.getByText('Staff'));
        expect(await screen.findByText('Staff Page')).toBeInTheDocument();
    });
});