import styles from './OrdersPage.module.scss';
import { Button, Text, TextSize, TextWeight } from '@org/foody-shared-components';
import { HeaderBar } from '../../../widgets/HeaderBar';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Spinner } from '@org/foody-shared-components';
import { notification, Table } from 'antd';
import { useCategory } from '../../../entities/Category';
import { useQuery } from '@tanstack/react-query';
import { useAddStore } from '../../../entities/Add';
import { HandleButtons } from '../../../features/handleProduct/ui/HandleButtons';
import { Category } from '../../../entities/Category/lib/types/category';

export const OrdersPage = () => {
  const { t } = useTranslation('order');

  //   const { setType, setIsOpen, setId } = useAddStore();

  //   const handleDeleteCategory = async () => {
  //     try {
  //       await deleteCategory.mutateAsync(localStorage.getItem('@foody_delete_item_id') || '');

  //       notification.success({
  //         message: t`Category deleted successfully`,
  //       });
  //     } catch (e: any) {
  //       notification.error({
  //         message: t`Category deletion failed`,
  //         description: e.message || 'An error occurred while deleteing the category.',
  //       });
  //     }
  //   };

  //   if (isLoading) {
  //     return <Spinner />;
  //   }

  //   if (error) {
  //     return (
  //       <div className={styles.error}>
  //         <Text weight={TextWeight.BOLD} size={TextSize.L}>
  //           {t('Failed to load categories. Please try again later.')}
  //         </Text>
  //       </div>
  //     );
  //   }

  return (
    <div>
      <Helmet>
        <title>{t('Orders page')}</title>
        <meta name="description" content="Orders page" />
      </Helmet>
      <HeaderBar title={t('Orders')} />

      <div className={styles.ordersList}>
        {/* <Table dataSource={categories || []} rowKey={record => record._id}>
          <Table.Column
            title="ID"
            dataIndex="_id"
            key="_id"
            render={text => {
              return <p>{text.slice(0, 4)}</p>;
            }}
          />
          <Table.Column title="Name" dataIndex="name" key="name" />
          <Table.Column
            title="Image"
            dataIndex="image"
            key="image"
            render={url => {
              return <img src={url} alt="Category" style={{ width: '80px', height: '50px' }} />;
            }}
          />
          <Table.Column
            render={(category: Category) => (
              <HandleButtons
                id={category._id}
                onDelete={handleDeleteCategory}
                onEdit={() => handleEditCategory(category._id)}
              />
            )}
          />
        </Table> */}
      </div>
    </div>
  );
};
