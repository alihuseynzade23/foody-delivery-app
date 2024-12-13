import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const RestaurantsPage: FC = () => {
  const { t } = useTranslation('restaurant');
  return (
    <div>
      <Helmet>
        <title>{t`Restaurants`}</title>
      </Helmet>
      RestaurantsPage
    </div>
  );
};
