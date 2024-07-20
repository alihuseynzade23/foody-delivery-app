import { classNames } from '../../../../lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

// Optional
// export enum TextTheme {
//   PRIMARY = 'primary',
//   ERROR = 'error',
// }

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  // theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    // theme = TextTheme.PRIMARY
  } = props;

  return (
    <div className={classNames(styles.Text, {}, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
