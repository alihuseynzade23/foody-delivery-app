import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const RestaurantsPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t`Restaurants`}</title>
      </Helmet>
      RestaurantsPage
    </div>
  );
};
