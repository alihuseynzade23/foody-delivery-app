import styles from './RestaurantsPage.module.scss';
import { Button, Text, TextSize, TextWeight } from '@org/foody-shared-components';
import { HeaderBar } from '../../../widgets/HeaderBar';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useAddStore } from '../../../entities/Add';

// import { getCategories } from '../../CategoriesPage';
import { useEffect, useState } from 'react';

export const RestaurantsPage = () => {
  const { t } = useTranslation('restaurant');

  const [state, setState] = useState([]);

  const { setIsOpen, setType } = useAddStore();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const data = await getCategories();
        // @ts-expect-error-next-line
        setState(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  const handleAdding = () => {
    setIsOpen(true);
    setType('restaurant');
  };

  return (
    <div>
      <Helmet>
        <title>{t('Restaurants page')}</title>
        <meta name="description" content="Restaurants page" />
      </Helmet>

      <HeaderBar selectOptions={state} select title={t('Restaurant')}>
        <Button onClick={handleAdding} add>
          <Text weight={TextWeight.BOLD} size={TextSize.M}>
            {t('ADD RESTAURANT')}
          </Text>
        </Button>
      </HeaderBar>
    </div>
  );
};
