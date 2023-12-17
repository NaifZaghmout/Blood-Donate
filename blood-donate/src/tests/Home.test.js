// src/tests/home.test.js
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home Component', () => {
  const setup = async () => {
    render(<Home />);
    await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });
  };

  beforeEach(async () => {
    await setup();
  });

  test('renders welcome message', async () => {
    const welcomeMessage = await screen.findByText(/Welcome to Stockholm Blood Donate Organization/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders blood donation sections', async () => {
    const maleDonationSection = await screen.findByText(/Donating Blood as a Male/i);
    const femaleDonationSection = await screen.findByText(/Donating Blood as a Female/i);
    expect(maleDonationSection).toBeInTheDocument();
    expect(femaleDonationSection).toBeInTheDocument();
  });


  test('renders the initial image in the carousel', async () => {
    const firstImage = await screen.findByAltText(/Image 1/i);
    expect(firstImage).toBeInTheDocument();
  });

  test('renders "Who Can Donate" section correctly', async () => {
    const whoCanDonate = await screen.findByText(/Who Can Donate/i);
    expect(whoCanDonate).toBeInTheDocument();
  });


  test('renders health benefits section correctly', async () => {
    const healthBenefits = await screen.findByText(/Health Benefits for Blood Donation/i);
    expect(healthBenefits).toBeInTheDocument();
  });
});