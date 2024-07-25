import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '../../../lib/classNames/classNames';

import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  BG_VIOLET = 'bgViolet',
  BG_GRAY = 'bgGray',
  BG_RED = 'bgRed',
  BG_ORANGE = 'bgOrange',
  BG_GREEN = 'bgGreen',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(styles.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
