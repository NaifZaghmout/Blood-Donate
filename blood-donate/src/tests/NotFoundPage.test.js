import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundPage from '../components/NotFoundPage';

describe('NotFoundPage Component', () => {
    test('renders 404 message and description', () => {
        render(<NotFoundPage />);

        expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
        expect(screen.getByText('The page you are looking for might have been removed, or is temporarily unavailable.')).toBeInTheDocument();
    });

});