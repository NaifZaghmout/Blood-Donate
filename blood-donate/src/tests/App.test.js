import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Add this line

import App from '../App';

test('renders Home link in navigation bar', () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});
