import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';



describe('Footer Component Tests', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders footer content', async () => {
    const footerContent = await screen.findByText(/© 2023 Stockholm-Blood-Donate-Organization. All rights reserved./i);
    expect(footerContent).toBeInTheDocument();
});

  test('renders Facebook social media link correctly', async () => {
    const facebookLink = await screen.findByRole('link', { name: /facebook/i });
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com');
  });

  test('renders Twitter social media link correctly', async () => {
    const twitterLink = await screen.findByRole('link', { name: /twitter/i });
    expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com');
  });

  test('renders Instagram social media link correctly', async () => {
    const instagramLink = await screen.findByRole('link', { name: /instagram/i });
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com');
  });
});
