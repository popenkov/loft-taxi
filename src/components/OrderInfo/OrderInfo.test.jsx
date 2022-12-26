import { addressListMapper } from './utils';
import { render, screen } from '@testing-library/react';

import { renderWithRouter } from '../../test/helpers/renderWithRouter';
import { OrderInfo } from './OrderInfo.jsx';

describe('<OrderInfo/>', () => {
  test('select data after mapping is correct', () => {
    expect(addressListMapper(['адрес'])).toEqual([
      {
        value: 'adres',
        label: 'адрес',
      },
    ]);
  });

  // test('components renders correctly', () => {
  //   render(<OrderInfo />);
  //   screen.debug();
  //   const btn = screen.getByRole('button');
  //   const input = screen.getByRole('input');

  //   expect(btn).toBeInTheDocument();
  //   expect(input).toMatchSnapshot();
  // });
});
