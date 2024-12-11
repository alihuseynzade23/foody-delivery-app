import { useTranslation } from 'react-i18next';
import { OrdersChart } from '../../../widgets/OrdersChart';
import { TotalSalaryChart } from '../../../widgets/TotalSalaryChart';
import styles from './DashboardPage.module.scss';
import { Helmet } from 'react-helmet';

export const DashboardPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t`Dashboard page`}</title>
        <meta name="description" content="Dashboard page" />
      </Helmet>

      <div className={styles.dashboardContainer}>
        <OrdersChart />
        <TotalSalaryChart />
      </div>
    </div>
  );
};
