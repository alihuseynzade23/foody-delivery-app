import styles from './CategoriesPage.module.scss';
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

export const ProductsPage = () => {
  const { t } = useTranslation('product');

  // const { fetchCategories, deleteCategory } = useCategory();
  // const { data: categories, isLoading, error } = useQuery(fetchCategories);

  const { setType, setIsOpen, setId } = useAddStore();

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // if (error) {
  //   return (
  //     <div className={styles.error}>
  //       <Text weight={TextWeight.BOLD} size={TextSize.L}>
  //         {t('Failed to load categories. Please try again later.')}
  //       </Text>
  //     </div>
  //   );
  // }

  const handleSidebarOpening = () => {
    setType('product');
    setIsOpen(true);
  };

  // const handleDeleteCategory = async (id: string) => {
  //   try {
  //     await deleteCategory.mutateAsync(id);

  //     notification.success({
  //       message: t`Category deleted successfully`,
  //     });
  //   } catch (e: any) {
  //     notification.error({
  //       message: t`Category deletion failed`,
  //       description: e.message || 'An error occurred while creating the category.',
  //     });
  //   }
  // };

  // const handleEditCategory = async (id: string) => {
  //   handleSidebarOpening();
  //   setId(id);
  // };

  return (
    <div>
      <Helmet>
        <title>{t('Products page')}</title>
        <meta name="description" content="Products page" />
      </Helmet>
      <HeaderBar defaultValue='Restaurant type' select title={t('Product')} />

      {/* <div className={styles.categoriesList}>
        <Table dataSource={categories || []} rowKey={record => record._id}>
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
            render={record => (
              <HandleButtons
                onEdit={() => handleEditCategory(record._id)}
                onDelete={() => handleDeleteCategory(record._id)}
              />
            )}
          />
        </Table>
      </div> */}
    </div>
  );
};
