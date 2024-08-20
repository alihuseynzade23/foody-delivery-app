import type { TableProps } from 'antd';

type DataType = {
  key: string;
  name: string;
  dataIndex: string;
};

export const categoryColumns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
  },
  {
    title: 'Image',
    dataIndex: 'Image',
    key: 'Image',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
];
