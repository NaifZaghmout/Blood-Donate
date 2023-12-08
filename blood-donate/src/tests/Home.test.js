// src/test/home.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/home';

describe('Home Component', () => {
    beforeEach(() => {
        render(<Home />);
    });

    test('renders welcome message', () => {
        const welcomeMessage = screen.getByText(/Welcome to Stockholm Blood Donate Organization/i);
        expect(welcomeMessage).toBeInTheDocument();
    });

    test('renders blood donation sections', () => {
        const maleDonationSection = screen.getByText(/Donating Blood as a Male/i);
        const femaleDonationSection = screen.getByText(/Donating Blood as a Female/i);
        expect(maleDonationSection).toBeInTheDocument();
        expect(femaleDonationSection).toBeInTheDocument();
    });

    

});
