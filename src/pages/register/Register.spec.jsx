import { Register } from './Register';
import { render } from '@testing-library/react';

describe('Register', () => {
  it('renders correctly', () => {
    const { container } = render(<Register />);
    expect(container.innerHTML).toMatch('Register');
  });
});
