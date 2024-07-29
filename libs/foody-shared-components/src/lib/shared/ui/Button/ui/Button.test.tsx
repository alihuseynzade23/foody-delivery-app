import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button, ButtonSize, ButtonTheme } from './Button';

describe('Button component', () => {
  test('Test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('render with default theme', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });

  test('render with gray theme', () => {
    render(<Button theme={ButtonTheme.BG_GRAY}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('bgGray');
  });

  test('render with orange theme', () => {
    render(<Button theme={ButtonTheme.BG_ORANGE}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('bgOrange');
  });

  test('render with red theme', () => {
    render(<Button theme={ButtonTheme.BG_RED}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('bgRed');
  });

  test('render with green theme', () => {
    render(<Button theme={ButtonTheme.BG_GREEN}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('bgGreen');
  });

  test('render with violet theme', () => {
    render(<Button theme={ButtonTheme.BG_VIOLET}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('bgViolet');
  });

  test('render with small size', () => {
    render(<Button size={ButtonSize.S}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('size_s');
  });

  test('render with medium size', () => {
    render(<Button size={ButtonSize.M}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('size_m');
  });

  test('render with large size', () => {
    render(<Button size={ButtonSize.L}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('size_l');
  });

  test('render with extra large size', () => {
    render(<Button size={ButtonSize.XL}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('size_xl');
  });
});
