import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';




const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('ContactUs Component', () => {
  test('displays loader initially and then the content', async () => {
    renderWithRouter(<ContactUs />);

    expect(screen.getByText('Loading . . .')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument();
    }, { timeout: 15000 });

    await waitFor(() => {
      expect(screen.getByText('Contact Information')).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  test('hover effects on contact info', async () => {
    renderWithRouter(<ContactUs />);
    await waitFor(() => {
      const contactInfo = screen.getByText('+1 (555) 123-4567').closest('div');
      fireEvent.mouseOver(contactInfo);


      fireEvent.mouseOut(contactInfo);

    }, { timeout: 15000 });
  });

  test('hover effects on message form', async () => {
    renderWithRouter(<ContactUs />);
    await waitFor(() => {
      const messageForm = screen.getByPlaceholderText('Enter your name').closest('form');
      fireEvent.mouseOver(messageForm);

      fireEvent.mouseOut(messageForm);

    }, { timeout: 15000 });
  });

  test('form elements are present and interactive', async () => {
    renderWithRouter(<ContactUs />);
    await waitFor(() => {
      const nameInput = screen.getByPlaceholderText('Enter your name');
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const messageInput = screen.getByPlaceholderText('Type your message here');
      const submitButton = screen.getByText('Send Message');

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

      expect(nameInput.value).toBe('John Doe');
      expect(emailInput.value).toBe('john@example.com');
      expect(messageInput.value).toBe('Hello, this is a test message.');
    }, { timeout: 15000 });
  });


});
