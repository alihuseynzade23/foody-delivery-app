import styles from './RestaurantsPage.module.scss';
import { Button, Spinner, Text, TextSize, TextWeight } from '@org/foody-shared-components';
import { HeaderBar } from '../../../widgets/HeaderBar';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useAddStore } from '../../../entities/Add';

// import { getCategories } from '../../CategoriesPage';
import { useQuery } from '@tanstack/react-query';
import { useCategory } from '../../../entities/Category';
import { RestaurantItem } from '../../../entities/Restaurant';
import { Restaurant } from '../../../entities/Restaurant';

export const RestaurantsPage = () => {
  const { t } = useTranslation('restaurant');
  const { fetchCategories } = useCategory();
  const { data: categories, isLoading, error } = useQuery(fetchCategories);

  // const [state, setState] = useState([]);

  const { setIsOpen, setType } = useAddStore();

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       // const data = await getCategories();
  //       // @ts-expect-error-next-line
  //       setState(data);
  //     } catch (err) {
  //       console.error('Error fetching categories:', err);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  const handleAdding = () => {
    setIsOpen(true);
    setType('restaurant');
  };

  if (isLoading) {
    <Spinner />;
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
        <title>{t('Restaurants page')}</title>
        <meta name="description" content="Restaurants page" />
      </Helmet>

      <HeaderBar selectOptions={categories || []} select title={t('Restaurant')}>
        <Button onClick={handleAdding} add>
          <Text weight={TextWeight.BOLD} size={TextSize.M}>
            {t('ADD RESTAURANT')}
          </Text>
        </Button>
      </HeaderBar>

      {categories.map((item: Restaurant) => (
        <RestaurantItem key={item._id} data={item} />
      ))}
    </div>
  );
};
