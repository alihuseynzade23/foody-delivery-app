import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Input, InputTheme } from './Input';

const testPlaceholder = 'test placeholder';

describe('Input', () => {
  it('should render the input', () => {
    render(<Input placeholder={testPlaceholder} />);
    expect(screen.getByPlaceholderText(testPlaceholder)).toBeInTheDocument();
  });

  it('should render the input with the value', () => {
    render(<Input placeholder={testPlaceholder} value="test value" />);
    expect(screen.getByDisplayValue('test value')).toBeInTheDocument();
  });

  it('should render the input with the label', () => {
    render(<Input placeholder={testPlaceholder} label="test label" />);
    expect(screen.getByText('test label')).toBeInTheDocument();
  });

  it('should render the input with admin theme', () => {
    render(<Input placeholder={testPlaceholder} theme={InputTheme.BG_ADMIN} />);
    expect(screen.getByPlaceholderText(testPlaceholder)).toHaveClass('bgAdmin');
  });

  it('should render with default theme', () => {
    render(<Input placeholder={testPlaceholder} />);
    expect(screen.getByPlaceholderText(testPlaceholder)).toHaveClass('bgWhite');
  });

  it('should render the input with the type', () => {
    render(<Input placeholder={testPlaceholder} type="password" />);
    expect(screen.getByPlaceholderText(testPlaceholder)).toHaveAttribute('type', 'password');
  });

  it('should render with the input class name', () => {
    render(<Input placeholder={testPlaceholder} inputClassName="test-class-name" />);
    expect(screen.getByPlaceholderText(testPlaceholder)).toHaveClass('test-class-name');
  });

  it('should render with error', () => {
    render(<Input placeholder={testPlaceholder} error="test error" />);
    expect(screen.getByText('test error')).toBeInTheDocument();
  });

  // Onchange testing left out for now
});
