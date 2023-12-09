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
  
    test('check hover effect on contact information section', () => {
      render(<ContactUs />);
      const contactInfo = screen.getByText('+1 (555) 123-4567').closest('div');
      fireEvent.mouseEnter(contactInfo);
      expect(contactInfo).toHaveStyle('background: purple');
      fireEvent.mouseLeave(contactInfo);
      expect(contactInfo).toHaveStyle('background: darkorchid');
    });
  
    test('renders form fields with placeholders', () => {
      render(<ContactUs />);
  
      expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Type your message here')).toBeInTheDocument();
    });
  
    test('check hover effect on message form', () => {
      render(<ContactUs />);
      const messageForm = screen.getByPlaceholderText('Enter your name').closest('form');
      fireEvent.mouseEnter(messageForm);
      expect(messageForm).toHaveStyle('background: purple');
      fireEvent.mouseLeave(messageForm);
      expect(messageForm).toHaveStyle('background: darkorchid');
    });
  
    test('renders the footer with social media links', () => {
      render(<ContactUs />);
  
      expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
      expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
      expect(screen.getByText(/© 2023 Your Website. All rights reserved./i)).toBeInTheDocument();
    });
  });