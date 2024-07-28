import { memo } from 'react';

import styles from './Line.module.scss';

export interface LineProps {
  className?: string;
}

export const Line = memo((props: LineProps) => {
  return (
    <div>
      <div className={styles.line}></div>
    </div>
  );
});
