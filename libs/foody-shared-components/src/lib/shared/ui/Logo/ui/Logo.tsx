import { FC } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import styles from './Logo.module.scss';

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
    <p className={classNames(styles.Logo, { [styles[theme]]: true }, [className])}>
      Foody <span className={classNames(styles.dot, {[styles[`dot${theme}`]]: true}, [])}>.</span>
    </p>
  );
};
