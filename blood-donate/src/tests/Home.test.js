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


  test('renders health benefits section correctly', () => {
    const healthBenefits = screen.getByText(/Health Benefits for Blood Donation/i);
    expect(healthBenefits).toBeInTheDocument();
  });

  test('renders footer content', () => {
    const footerContent = screen.getByText(/2023 Your Website. All rights reserved./i);
    expect(footerContent).toBeInTheDocument();
  });


  test('renders Facebook social media link correctly', () => {
    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com');
  });

  test('renders Twitter social media link correctly', () => {
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com');
  });

  test('renders Instagram social media link correctly', () => {
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com');
  });


});
