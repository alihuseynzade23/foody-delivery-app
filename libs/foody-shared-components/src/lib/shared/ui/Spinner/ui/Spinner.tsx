import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const Spinner = () => {
  return <Spin indicator={<LoadingOutlined spin />} size="large" />;
};
