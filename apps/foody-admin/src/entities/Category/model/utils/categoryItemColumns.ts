import type { TableColumnsType } from 'antd';

type DataType = {
  key: string;
  name: string;
  dataIndex: string;
};

export const categoryColumns: TableColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: '$id',
    key: '$id',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  // {
  //   title: '',
  //   dataIndex: '',
  //   key: 'action',
  //   render: () => <Button type="link">Delete</Button>,
];
