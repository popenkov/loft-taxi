import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Navigation } from './Navigation';
import { renderWithRouter } from '../../../test/helpers/renderWithRouter';
// import { Map } from '../../Map';

describe('Navigation test', () => {
  test('map link works correctly', async () => {
    render(renderWithRouter(<Navigation />));
    screen.debug();
    const mapLink = screen.getByText(/Карта/i);
    userEvent.click(mapLink);
    screen.debug();
    expect(screen.getByText(/Map page/i)).toBeInTheDocument();
  });
});
