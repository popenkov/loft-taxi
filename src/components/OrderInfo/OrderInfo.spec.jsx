import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { OrderInfo } from './OrderInfo';

describe('<OrderInfo/>', () => {
  it('should render preloader', () => {
    const { container } = render(<OrderInfo />);
    debug();
    expect(container.innerHTML('Заказать').toBeInTheDocument());
  });
});
