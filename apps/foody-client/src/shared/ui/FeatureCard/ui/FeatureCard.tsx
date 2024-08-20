import React from 'react';
import styles from './FeatureCard.module.scss';
import { TextSize, TextTheme, TextWeight,Text } from '@org/foody-shared-components';

interface FeatureCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={imgAlt} />
      <Text theme={TextTheme.STRONG_GRAY} weight={TextWeight.BOLD} size={TextSize.L} className={styles.title}>
        {title}
      </Text>
      <Text theme={TextTheme.CLEAR} weight={TextWeight.NORMAL} size={TextSize.M} className={styles.description}>
        {description}
      </Text>
    </div>
  );
};


