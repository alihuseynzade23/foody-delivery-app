import React from 'react';
import styles from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '../../../shared/ui/LangSwitcher';

interface NotFoundPageProps {
  title: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ title }) => {
  return <div className={styles.test}>{title}</div>;
};
