import { OrdersChart } from '../../../../../foody-admin/src/shared/OrdersChart';
import { TotalSalaryChart } from '../../../shared/TotalSalaryChart';
import styles from './DashboardPage.module.scss';
import React from 'react';

export const DashboardPage = () => {
  return (
    <div>
      <div className={styles.dashboardContainer}>
        <OrdersChart />
        <TotalSalaryChart />
      </div>
    </div>
  );
};
