import React from 'react';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  title: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ title }) => {
  return <div className={styles.test}>{title}</div>;
};
