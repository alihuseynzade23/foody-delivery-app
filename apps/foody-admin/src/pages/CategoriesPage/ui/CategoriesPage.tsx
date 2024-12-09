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
import { Category } from '../../../entities/Category/model/types/category';

export const CategoriesPage = () => {
  const { t } = useTranslation('category');

  const { fetchCategories, deleteCategory } = useCategory();
  const { data: categories, isLoading, error } = useQuery(fetchCategories);

  const { setType, setIsOpen, setId, id: categoryId } = useAddStore();

  const handleDeleteCategory = async () => {
    try {
      await deleteCategory.mutateAsync(localStorage.getItem('@foody_delete_category_id') || '');

      notification.success({
        message: t`Category deleted successfully`,
      });
    } catch (e: any) {
      notification.error({
        message: t`Category deletion failed`,
        description: e.message || 'An error occurred while creating the category.',
      });
    }
  };

  const handleSidebarOpening = (type: string) => {
    setType(type);
    setIsOpen(true);
  };

  const handleEditCategory = (id: string) => {
    handleSidebarOpening('updateCategory');
    setId(id);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <Text weight={TextWeight.BOLD} size={TextSize.L}>
          {t('Failed to load categories. Please try again later.')}
        </Text>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{t('Categories page')}</title>
        <meta name="description" content="Categories page" />
      </Helmet>
      <HeaderBar title={t('Category')}>
        <Button onClick={() => handleSidebarOpening('createCategory')} add>
          <Text weight={TextWeight.BOLD} size={TextSize.M}>
            {t('ADD CATEGORY')}
          </Text>
        </Button>
      </HeaderBar>

      <div className={styles.categoriesList}>
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
            render={(category: Category) => (
              <HandleButtons
                id={category._id}
                onDelete={handleDeleteCategory}
                onEdit={() => handleEditCategory(category._id)}
              />
            )}
          />
        </Table>
      </div>
    </div>
  );
};
