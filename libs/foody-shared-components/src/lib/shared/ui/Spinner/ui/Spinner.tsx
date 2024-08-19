import { LoadingOutlined } from '@ant-design/icons';

import { Spin } from 'antd';

import styles from './Spinner.module.scss';

export const Spinner = () => {
  return <Spin indicator={<LoadingOutlined spin />} className={styles.spinner} size="large" />;
};
