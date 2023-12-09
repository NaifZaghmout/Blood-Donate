// src/tests/home.test.js
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

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


  test('renders the initial image in the carousel', () => {
    const firstImage = screen.getByAltText(/Image 1/i);
    expect(firstImage).toBeInTheDocument();
  });

  test('renders "Who Can Donate" section correctly', () => {
    const whoCanDonate = screen.getByText(/Who Can Donate/i);
    expect(whoCanDonate).toBeInTheDocument();
  });


});
