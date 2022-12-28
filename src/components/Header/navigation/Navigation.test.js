import { screen, fireEvent } from '@testing-library/react';
import { renderTestApp } from '../../../test/helpers/renderTestApp';
import { Navigation } from './Navigation';

describe('exit btn component', () => {
  let container;

  beforeEach(() => {
    container = renderTestApp(<Navigation />, {
      route: '/',
      initialState: {},
    });
  });

  test('renders correctly', async () => {
    expect(<Navigation />).toMatchSnapshot();
  });

  test('renders all links', async () => {
    const links = await container.findAllByTestId('links-item');
    expect(links.length).toBe(2);
  });
});
