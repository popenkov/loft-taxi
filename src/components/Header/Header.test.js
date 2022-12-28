import { screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { renderTestApp } from '../../test/helpers/renderTestApp';

describe('header component', () => {
  let container;

  beforeEach(() => {
    container = renderTestApp(<Header />, {
      route: '/',
      initialState: {},
    });
  });

  test('renders correctly', async () => {
    expect(<Header />).toMatchSnapshot();
  });

  test('shows "Профиль"', () => {
    expect(container.getByText('Профиль')).not.toBeNull();
  });

  test('shows logo', () => {
    screen.debug();
    const logoContainer = container.getByTestId('logo-container');
    expect(logoContainer).toBeVisible();
  });
});
