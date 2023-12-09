import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUs from '../components/ContactUs';

describe('ContactUs Component', () => {
    test('renders contact information and message form headings', () => {
      render(<ContactUs />);
  
      expect(screen.getByText('Contact Information')).toBeInTheDocument();
      expect(screen.getByText('Send Us a Message')).toBeInTheDocument();
    });
  
    test('renders contact information details', () => {
      render(<ContactUs />);
  
      expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
      expect(screen.getByText('123 Main Street, Cityville, State, Zip Code')).toBeInTheDocument();
      expect(screen.getByText('info@blooddonation.org')).toBeInTheDocument();
    });
  
  
    test('renders form fields with placeholders', () => {
      render(<ContactUs />);
  
      expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Type your message here')).toBeInTheDocument();
    });
   
  });