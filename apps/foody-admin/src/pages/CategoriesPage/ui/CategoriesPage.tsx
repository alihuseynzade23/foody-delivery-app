import styles from './CategoriesPage.module.scss';
import { Button, Text, TextSize, TextWeight } from '@org/foody-shared-components';
import { HeaderBar } from '../../../widgets/HeaderBar';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { addCb } from '../../../entities/Add';
import { useEffect } from 'react';
import { getCategories } from '../model/services/getCategories/getCategories';
import { categoryStore } from '../model/store/categoryStore';

import { Spinner } from '@org/foody-shared-components';

import { Table } from 'antd';
import { getCategoryImages } from '../model/services/getCategoryImages/getCategoryImages';

export const CategoriesPage = () => {
  const { t } = useTranslation('category');
  const { setCategories, categories, setIsLoading, isLoading } = categoryStore();

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const data = await getCategories();
        const images = await getCategoryImages();
        // @ts-expect-error-next-line
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [setCategories, setIsLoading]);

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

      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.categoriesList}>
          <Table dataSource={categories} rowKey={record => record.$id}>
            <Table.Column title="ID" dataIndex="$id" key="$id" />
            <Table.Column title="Name" dataIndex="name" key="name" />
          </Table>
        </div>
      )}
    </div>
  );
};
