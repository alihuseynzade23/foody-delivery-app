import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Logo, LogoTheme } from './Logo';
import styles from './Logo.module.scss';

describe('Logo component', () => {
  test('renders with primary theme', () => {
    const { getByTestId } = render(<Logo theme={LogoTheme.PRIMARY} />);
    const logoElement = getByTestId('logo-element');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass(styles.primary);
  });

  test('renders with secondary theme', () => {
    const { getByTestId } = render(<Logo theme={LogoTheme.SECONDARY} />);
    const logoElement = getByTestId('logo-element');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass(styles.secondary);
  });

  test('renders with additional className', () => {
    const { getByTestId } = render(<Logo className="some-class" theme={LogoTheme.PRIMARY} />);
    const logoElement = getByTestId('logo-element');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass(styles.primary);
    expect(logoElement).toHaveClass('some-class');
  });
});
