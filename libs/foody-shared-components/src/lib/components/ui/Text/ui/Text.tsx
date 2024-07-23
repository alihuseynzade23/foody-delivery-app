import { classNames } from '../../../../lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  size?: 's' | 'm' | 'l' | 'xl';
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text, 
    title,
    size = 'm', 
  } = props;

  return (
    <div className={classNames(styles.Text, {}, [className, styles[size]])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
