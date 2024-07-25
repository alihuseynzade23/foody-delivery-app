import { classNames, Mods } from '../../../lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
  CLEAR = 'clear',
  WHITE = 'white',
  GRAY = 'gray',
  BLACK = 'black',
  ORANGE = 'orange',
  RED = 'red',
  GREEN = 'green',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export enum TextWeight {
  LIGHT = 'light',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  BOLD = 'bold',
  EXTRABOLD = 'extraBold',
}

export enum TextFont {
  MONTSERRAT = 'montserrat',
  ROBOTO = 'roboto',
  MUKTA = 'mukta',
}

interface TextProps {
  children: string;
  className?: string;
  size?: TextSize;
  theme?: TextTheme;
  weight?: TextWeight;
  font?: TextFont;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    children,
    size = TextSize.M,
    theme = TextTheme.CLEAR,
    weight = TextWeight.NORMAL,
    font = TextFont.ROBOTO,
    ...otherProps
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[size]]: true,
    [styles[weight]]: true,
    [styles[font]]: true,
  };

  return (
    <p className={classNames(styles.Text, mods, [className])} {...otherProps}>
      {children}
    </p>
  );
});
