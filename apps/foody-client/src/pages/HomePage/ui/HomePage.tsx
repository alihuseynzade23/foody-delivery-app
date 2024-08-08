import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t`Home`}</title>
        <meta name="description" content="Home page" />
      </Helmet>
      HomePage
    </div>
  );
};
