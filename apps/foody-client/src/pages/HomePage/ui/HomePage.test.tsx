import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  test('it should render', () => {
    render(<HomePage />);
    const homePageElement = screen.getByText('HomePage');
    expect(homePageElement).toBeInTheDocument();
  });
});
