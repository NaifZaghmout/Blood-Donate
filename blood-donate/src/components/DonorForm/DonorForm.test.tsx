import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DonorForm from './DonorForm';

describe('<DonorForm />', () => {
  test('it should mount', () => {
    render(<DonorForm />);
    
    const donorForm = screen.getByTestId('DonorForm');

    expect(donorForm).toBeInTheDocument();
  });
});