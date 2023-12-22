import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import User from '../pages/User';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
    fetchMock.resetMocks();
});

describe('User Component', () => {
    test('renders initial message', async () => {
        render(
            <Router>
                <User />
            </Router>
        );

        expect(screen.getByText('Make a Difference with Your Donation')).toBeInTheDocument();

    });


    test('navigates to second step', async () => {
        render(
            <Router>
                <User />
            </Router>
        );

        fireEvent.click(screen.getByText('Next'));
        expect(screen.getByText('Ready to Be a Hero?')).toBeInTheDocument();
    });


    test('displays form for blood donation', async () => {
        render(
            <Router>
                <User />
            </Router>
        );

        fireEvent.click(screen.getByText('Next'));
        fireEvent.click(screen.getByText("Yes, I'm Ready"));

        expect(screen.getByText('Blood Donation Application')).toBeInTheDocument();
    });
    test('submits form and shows submission message', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ data: '12345' }));
        render(
            <Router>
                <User />
            </Router>
        );

        fireEvent.click(screen.getByText('Next'));
        fireEvent.click(screen.getByText("Yes, I'm Ready"));

        fireEvent.change(screen.getByPlaceholderText('Enter Your Name'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Phone Number'), { target: { value: '1234567890' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Blood Type'), { target: { value: 'A+' } });
        fireEvent.change(screen.getByPlaceholderText('Write About Your Health Condition'), { target: { value: 'Healthy' } });

        fireEvent.click(screen.getByText('Submit Application'));

        await waitFor(() => {
            expect(screen.getByText('Application Submitted')).toBeInTheDocument();
        });

        expect(screen.getByText('Back to Home')).toBeInTheDocument();
    });
});
