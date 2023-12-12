// src/tests/home.test.js
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../components/Home';

describe('Home Component', () => {
  const setup = async () => {
    render(<Home />);
    await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });
  };

  beforeEach(async () => {
    await setup();
  });

  test('renders welcome message',async () => {
    const welcomeMessage = await screen.findByText(/Welcome to Stockholm Blood Donate Organization/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders blood donation sections',async () => {
    const maleDonationSection = await screen.findByText(/Donating Blood as a Male/i);
    const femaleDonationSection = await screen.findByText(/Donating Blood as a Female/i);
    expect(maleDonationSection).toBeInTheDocument();
    expect(femaleDonationSection).toBeInTheDocument();
  });


  test('renders the initial image in the carousel',async () => {
    const firstImage = await screen.findByAltText(/Image 1/i);
    expect(firstImage).toBeInTheDocument();
  });

  test('renders "Who Can Donate" section correctly', async() => {
    const whoCanDonate = await screen.findByText(/Who Can Donate/i);
    expect(whoCanDonate).toBeInTheDocument();
  });


  test('renders health benefits section correctly',async () => {
    const healthBenefits = await screen.findByText(/Health Benefits for Blood Donation/i);
    expect(healthBenefits).toBeInTheDocument();
  });

  test('renders footer content', async() => {
    const footerContent = await screen.findByText(/2023 Your Website. All rights reserved./i);
    expect(footerContent).toBeInTheDocument();
  });


  test('renders Facebook social media link correctly',async () => {
    const facebookLink = await screen.findByRole('link', { name: /facebook/i });
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com');
  });

  test('renders Twitter social media link correctly', async() => {
    const twitterLink = await screen.findByRole('link', { name: /twitter/i });
    expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com');
  });

  test('renders Instagram social media link correctly',async () => {
    const instagramLink = await screen.findByRole('link', { name: /instagram/i });
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com');
  });


});
