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

    await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });
    expect(await screen.findByText('Contact Information')).toBeInTheDocument();
  });

  test('hover effects on contact info', async () => {
    renderWithRouter(<ContactUs />);
    await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });

    const contactInfoText = await screen.findByText('+1 (555) 123-4567');
    fireEvent.mouseOver(contactInfoText);
    fireEvent.mouseOut(contactInfoText);
  });

  test('hover effects on message form', async () => {
    renderWithRouter(<ContactUs />);
    await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });

    const messageFormInput = await screen.findByPlaceholderText('Enter your name');
    fireEvent.mouseOver(messageFormInput);
    fireEvent.mouseOut(messageFormInput);
  });

  test('form elements are present and interactive', async () => {
    renderWithRouter(<ContactUs />);
    await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });

    const nameInput = await screen.findByPlaceholderText('Enter your name');
    const emailInput = await screen.findByPlaceholderText('Enter your email');
    const messageInput = await screen.findByPlaceholderText('Type your message here');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('Hello, this is a test message.');
  });
});
