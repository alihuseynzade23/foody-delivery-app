import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Text, TextFont, TextSize, TextTheme, TextWeight } from './Text';

describe('Text component', () => {
  it('should render', () => {
    render(<Text>Test</Text>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render with default theme', () => {
    render(<Text>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('white');
  });

  it('should render with gray theme', () => {
    render(<Text theme={TextTheme.GRAY}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('gray');
  });

  it('should render with orange theme', () => {
    render(<Text theme={TextTheme.ORANGE}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('orange');
  });

  it('should render with red theme', () => {
    render(<Text theme={TextTheme.RED}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('red');
  });

  it('should render with green theme', () => {
    render(<Text theme={TextTheme.GREEN}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('green');
  });

  it('should render with black theme', () => {
    render(<Text theme={TextTheme.BLACK}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('black');
  });

  it('should render with small size', () => {
    render(<Text size={TextSize.S}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('size_s');
  });

  it('should render with medium size', () => {
    render(<Text size={TextSize.M}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('size_m');
  });

  it('should render with large size', () => {
    render(<Text size={TextSize.L}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('size_l');
  });

  it('should render with extra large size', () => {
    render(<Text size={TextSize.XL}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('size_xl');
  });

  it('should render with light weight', () => {
    render(<Text weight={TextWeight.LIGHT}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('light');
  });

  it('should render with normal weight', () => {
    render(<Text weight={TextWeight.NORMAL}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('normal');
  });

  it('should render with medium weight', () => {
    render(<Text weight={TextWeight.MEDIUM}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('medium');
  });

  it('should render with bold weight', () => {
    render(<Text weight={TextWeight.BOLD}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('bold');
  });

  it('should render with extra bold weight', () => {
    render(<Text weight={TextWeight.EXTRABOLD}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('extraBold');
  });

  it('should render with montserrat font', () => {
    render(<Text font={TextFont.MONTSERRAT}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('montserrat');
  });

  it('should render with roboto font', () => {
    render(<Text font={TextFont.ROBOTO}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('roboto');
  });

  it('should render with mukta font', () => {
    render(<Text font={TextFont.MUKTA}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('mukta');
  });

  it('should render with custom class', () => {
    render(<Text className="custom">Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('custom');
  });

  it('should render with custom class and theme', () => {
    render(
      <Text className="custom" theme={TextTheme.ORANGE}>
        Test
      </Text>,
    );
    expect(screen.getByText('Test')).toHaveClass('custom');
    expect(screen.getByText('Test')).toHaveClass('orange');
  });
});
