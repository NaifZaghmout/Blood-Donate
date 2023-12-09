import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from '../components/AboutUs'; 

describe('AboutUs Component', () => {
    test('renders the main heading and organization description', () => {
      render(<AboutUs />);
  
      expect(screen.getByText('About Our Organization')).toBeInTheDocument();
      expect(screen.getByText(/Welcome to our Blood Donation Organization!/i)).toBeInTheDocument();
    });
  
    test('renders the "Why We Help" section with list items', () => {
      render(<AboutUs />);
  
      expect(screen.getByText('Why We Help')).toBeInTheDocument();
      expect(screen.getByText(/Emergency Situations:/i)).toBeInTheDocument();
      expect(screen.getByText(/Medical Treatments:/i)).toBeInTheDocument();
    });
  
    test('renders the footer with social media links', () => {
      render(<AboutUs />);
  
      expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
      expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
      expect(screen.getByText(/© 2023 Your Website. All rights reserved./i)).toBeInTheDocument();
    });
  
    
  });
  