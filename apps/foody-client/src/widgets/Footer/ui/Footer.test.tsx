import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from './Footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const {  getByAltText } = render(<Footer />);
    const logo = getByAltText('Foody logo');
    expect(logo).toBeInTheDocument();



  });
});
