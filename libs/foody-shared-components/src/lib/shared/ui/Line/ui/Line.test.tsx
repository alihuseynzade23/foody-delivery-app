import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Line } from './Line';

describe('Line component', () => {
  it('should render', () => {
    render(<Line />);
    expect(screen.getByTestId('line-element')).toBeInTheDocument();
  });

  it('should have line class', () => {
    render(<Line />);
    expect(screen.getByTestId('line-element')).toHaveClass('line');
  });
});
