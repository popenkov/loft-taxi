import { screen, fireEvent } from '@testing-library/react';
import { renderTestApp } from '../../test/helpers/renderTestApp';

import { LoginForm } from './LoginForm';

describe('login form component', () => {
  let container;

  beforeEach(() => {
    container = renderTestApp(<LoginForm />, {
      route: '/',
      initialState: {},
    });
  });

  test('renders correctly', async () => {
    expect(<LoginForm />).toMatchSnapshot();
  });
});
