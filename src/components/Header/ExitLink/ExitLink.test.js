import { screen, fireEvent } from '@testing-library/react';
import { renderTestApp } from '../../../test/helpers/renderTestApp';
import ExitLink from './ExitLink';

describe('exit btn component', () => {
  let container;

  beforeEach(() => {
    container = renderTestApp(<ExitLink />, {
      route: '/',
      initialState: {},
    });
  });

  test('renders correctly', async () => {
    expect(<ExitLink />).toMatchSnapshot();
  });

  test('shows "Выйти"', () => {
    expect(container.getByText(/выйти/i)).not.toBeNull();
  });
});
