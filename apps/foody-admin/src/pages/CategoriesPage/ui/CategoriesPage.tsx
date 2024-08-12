import styles from './CategoriesPage.module.scss';

import { Button, ButtonTheme, Text, TextSize, TextWeight } from '@org/foody-shared-components';
import { HeaderBar } from '../../../widgets/HeaderBar';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const CategoriesPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t`Categories page`}</title>
        <meta name="description" content="Categories page" />
      </Helmet>
      <HeaderBar title="Category">
        <Button add>
          <Text weight={TextWeight.BOLD} size={TextSize.M}>{t`ADD CATEGORY`}</Text>
        </Button>
      </HeaderBar>
    </div>
  );
};
