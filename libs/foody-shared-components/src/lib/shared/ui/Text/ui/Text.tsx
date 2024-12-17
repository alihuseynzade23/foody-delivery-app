import { classNames, Mods } from '../../../lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
  CLEAR = 'clear',
  WHITE = 'white',
  GRAY = 'gray',
  BLACK = 'black',
  ORANGE = 'orange',
  RED = 'red',
  GREEN = 'green',
  DARK_GRAY = 'darkGray',
  DARK_BlACK = 'darkBlack',
  STRONG_GRAY = 'strongGray',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
  XXL = 'size_xxl',
}

export enum TextWeight {
  LIGHT = 'light',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  BOLD = 'bold',
  EXTRABOLD = 'extraBold',
  M = 'M',
}

export enum TextFont {
  MONTSERRAT = 'montserrat',
  ROBOTO = 'roboto',
  MUKTA = 'mukta',
}

interface TextProps {
  children: string | ReactNode;
  className?: string;
  size?: TextSize;
  theme?: TextTheme;
  weight?: TextWeight;
  font?: TextFont;
  onClick?: () => void;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    children,
    size = TextSize.M,
    theme = TextTheme.WHITE,
    onClick,
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
    <p onClick={onClick} className={classNames(styles.Text, mods, [className])} {...otherProps}>
      {children}
    </p>
  );
});
