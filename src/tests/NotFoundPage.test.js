import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundPage from '../components/NotFoundPage';


describe('NotFoundPage Component', () => {
    test('renders 404 message and description after loading', async () => {
        render(<NotFoundPage />);

        await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });

        const notFoundText = await screen.findByText('404 - Page Not Found');
        expect(notFoundText).toBeInTheDocument();
        expect(screen.getByText('The page you are looking for might have been removed, or is temporarily unavailable.')).toBeInTheDocument();
    });
});