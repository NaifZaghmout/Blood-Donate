import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from '../pages/AboutUs';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';



describe('AboutUs Component', () => {
  const setup = async () => {
    // Wrap the render in act
    await act(async () => {
      render(
        <Router>
          <AboutUs />
        </Router>
      );
    });
    await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });
  };

  test('renders the main heading and organization description', async () => {
    await setup();

    expect(screen.getByText('About Our Organization')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to our Blood Donation Organization!/i)).toBeInTheDocument();
  });

  test('renders the "Why We Help" section with list items', async () => {
    await setup();

    expect(screen.getByText('Why We Help')).toBeInTheDocument();
    expect(screen.getByText(/Emergency Situations:/i)).toBeInTheDocument();
    expect(screen.getByText(/Medical Treatments:/i)).toBeInTheDocument();
  });

  

  test('renders the main image with alt text', async () => {
    await setup();

    expect(screen.getByAltText('Blood Donation Organization')).toBeInTheDocument();
  });

  test('checks for specific text content in the component', async () => {
    await setup();

    expect(screen.getByText(/positive impact on the health and well-being/i)).toBeInTheDocument();
    expect(screen.getByText(/dedicated group of individuals/i)).toBeInTheDocument();
  });

  

});
