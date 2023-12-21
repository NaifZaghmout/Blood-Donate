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
});