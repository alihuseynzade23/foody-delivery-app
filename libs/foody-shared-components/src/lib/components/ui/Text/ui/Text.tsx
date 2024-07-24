import { classNames, Mods } from '../../../../lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
  CLEAR = 'clear',
  WHITE = 'white',
  GRAY = 'gray',
  SECONDARY_BLACK = 'secondaryBlack',
  ORANGE = 'secondaryOrange',
  RED = 'red',
  DARK_GRAY = 'darkGray',
  GREEN = 'green',
  BLUE = 'blue',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export enum TextFontWeight {
  LIGHT = 'textLight',
  NORMAL = 'textNormal',
  MEDIUM = 'textMedium',
  BOLD = 'textBold',
  EXTRABOLD = 'textExtraBold',
}

export enum TextFont {
  MONTSERRAT = 'fontMontserrat',
  ROBOTO = 'fontRoboto',
  MUKTA = 'fontMukta',
}

interface TextProps {
  className?: string;
  text?: string;
  size?: TextSize;
  theme?: TextTheme;
  weight?: TextFontWeight;
  font?: TextFont;
}

export const Text: React.FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    text,
    size = TextSize.M,
    theme = TextTheme.CLEAR,
    weight = TextFontWeight.NORMAL,
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
    <div className={classNames(styles.Text, mods, [className])} {...otherProps}>
      <p className={styles.text}>{text}</p>
    </div>
  );
});
