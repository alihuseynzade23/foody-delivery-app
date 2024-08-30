import { FC } from 'react';

import styles from './CategoryItem.module.scss';
import { Table } from 'antd';

import { categoryColumns } from '../../model/utils/categoryItemColumns';

const { Column, ColumnGroup } = Table;

type CategoryItemProps = {
  $id: string;
  name: string;
  image: string;
};

export const CategoryItem: FC<CategoryItemProps> = ({ $id, name, image }) => {
  return (
    <>
      <Column title="ID" />
    </>
  );
};
