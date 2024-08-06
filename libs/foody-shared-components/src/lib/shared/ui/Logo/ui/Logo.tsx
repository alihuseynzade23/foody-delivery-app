import { FC } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

export enum LogoTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type LogoProps = {
  className?: string;
  theme: LogoTheme;
};

export const Logo: FC<LogoProps> = ({ className, theme }) => {
  return (
    <Link
      to="/"
      data-testid="logo-element"
      className={classNames(styles.Logo, { [styles[theme]]: true }, [className])}
    >
      Foody <span className={classNames(styles.dot, { [styles[`dot${theme}`]]: true }, [])}></span>
    </Link>
  );
};
