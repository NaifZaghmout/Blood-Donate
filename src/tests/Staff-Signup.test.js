import Signup from '../components/Staff-Signup';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('axios');

describe('Signup component', () => {
  test('renders Signup component without crashing', async () => {
    render(<Signup />);

    // Wait for the loader to disappear
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });

    // Wait for the form elements to appear
    await waitFor(() => {
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
      expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    });

    // Your other assertions or interactions can go here
  });
});
