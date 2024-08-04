import { FC } from 'react';
import { Text } from '../../Text';

import styles from './FormFieldError.module.scss';

export type FormFieldErrorProps = {
  error: string;
};

export const FormFieldError: FC<FormFieldErrorProps> = ({ error }) => {
  return <Text className={styles.error}>{error}</Text>;
};
