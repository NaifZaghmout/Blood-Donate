import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';




describe('Footer Component Tests', () => {


  test('renders footer content', () => {
    render(<Footer />);
    const footerContent = screen.getByText(/© 2023 Stockholm-Blood-Donate-Organization. All rights reserved./i);
    expect(footerContent).toBeInTheDocument();
  });

  test('renders Facebook social media link correctly', () => {
    render(<Footer />);
    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com');
  });

  test('renders Twitter social media link correctly', () => {
    render(<Footer />);
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com');
  });

  test('renders Instagram social media link correctly', () => {
    render(<Footer />);
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com');
  });
});
