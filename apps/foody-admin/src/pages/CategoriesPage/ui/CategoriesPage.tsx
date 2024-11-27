import styles from './CategoriesPage.module.scss';
import { Button, Text, TextSize, TextWeight } from '@org/foody-shared-components';
import { HeaderBar } from '../../../widgets/HeaderBar';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Spinner } from '@org/foody-shared-components';
import { Table } from 'antd';
import { useCategory } from '../../../entities/Category';
import { addCb } from '../../../entities/Add';
import { useQuery } from '@tanstack/react-query';

// import image from '/apps/foody-admin/src/shared/assets/uploads/2024-11-27/cat';

export const CategoriesPage = () => {
  const { t } = useTranslation('category');

  const { fetchCategories } = useCategory();
  const { data: categories, isLoading, error } = useQuery(fetchCategories);

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
        <Button onClick={addCb('category')} add>
          <Text weight={TextWeight.BOLD} size={TextSize.M}>
            {t('ADD CATEGORY')}
          </Text>
        </Button>
      </HeaderBar>

      <div className={styles.categoriesList}>
        {/* <img src={image} alt="Category" style={{ width: '50px', height: '50px' }} /> */}
        <Table dataSource={categories || []} rowKey={record => record._id}>
          <Table.Column title="ID" dataIndex="_id" key="_id" />
          <Table.Column title="Name" dataIndex="name" key="name" />
          <Table.Column
            title="Image"
            dataIndex="image"
            key="image"
            render={text => (
              <img src={text} alt="Category" style={{ width: '50px', height: '50px' }} />
            )}
          />
        </Table>
      </div>
    </div>
  );
};
