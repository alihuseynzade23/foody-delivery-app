import { FC } from 'react';
import styles from './HeaderBar.module.scss';
import { Text, TextSize, TextWeight } from '@org/foody-shared-components';

import { Flex, Select } from 'antd';

interface HeaderBarProps {
  title: string;
  children?: any;
  select?: boolean;
  selectOptions?: any;
  defaultValue?: string;
  
}

export const HeaderBar: FC<HeaderBarProps> = ({
  title,
  children,
  select,
  selectOptions,
  defaultValue,
}) => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Text weight={TextWeight.MEDIUM} size={TextSize.L} className={styles.title}>
          {title}
        </Text>
        <Flex align="center" gap="2rem" className={styles.childrenWrapper}>
          {children}
          {select && (
            <Select
              fieldNames={{ label: 'name', value: 'name' }}
              defaultValue={defaultValue ? defaultValue : 'Select'}
              options={selectOptions}
            />
          )}
        </Flex>
      </div>
    </header>
  );
};
