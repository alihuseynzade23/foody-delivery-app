import { useAuth } from '@org/foody-shared-components';
import { OrdersChart } from '../../../../../foody-admin/src/shared/OrdersChart';
import { TotalSalaryChart } from '../../../shared/TotalSalaryChart';
import styles from './DashboardPage.module.scss';
import React, { useEffect } from 'react';

export const DashboardPage = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <div className={styles.dashboardContainer}>
        <OrdersChart />
        <TotalSalaryChart />
      </div>
    </div>
  );
};
