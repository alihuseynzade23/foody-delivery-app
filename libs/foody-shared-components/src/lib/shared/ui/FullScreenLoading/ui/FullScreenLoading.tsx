import React from 'react';
import burgerLogo from '../../../assets/burger.svg';

import styles from './FullScreenLoading.module.scss';

interface FullScreenLoadingProps {
  text: string;
}

export const FullScreenLoading: React.FC<FullScreenLoadingProps> = ({ text }) => {
  return (
    <div className={styles.loadingContainer}>
      <div>
        <img src={burgerLogo} />
        {text}
      </div>
    </div>
  );
};
