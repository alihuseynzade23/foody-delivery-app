import React from 'react';
import Chart from 'react-apexcharts';
import styles from './TotalSalaryChart.module.scss';
import { Text, TextTheme } from '@org/foody-shared-components';
import { ApexOptions } from 'apexcharts';

export const TotalSalaryChart = () => {
  const seriesData = {
    monthDataSeries1: {
      prices: [100, 300, 600], 
      dates: [
        '2019', '2020', '2021' 
      ]
    }
  };

  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false 
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      colors: ['var(--primary-white)'], 
    },
    title: {
      text: 'Years',
      align: 'left',
      style: {
        color: 'var(--secondary-dark-gray)',
        fontSize: '16px',
        fontWeight: 'normal'
      }
    },
    labels: seriesData.monthDataSeries1.dates,
    xaxis: {
      type: 'category',
      categories: seriesData.monthDataSeries1.dates,
      labels: {
        style: {
            colors: 'var(--secondary-dark-gray)', 
        }
      }
    },
    yaxis: {
      opposite: true,
      labels: {
        style: {
            colors: 'var(--secondary-dark-gray)', 
        }
      },
      tickAmount: 3, 
      min: 0, 
      max: 600
    },
    legend: {
      horizontalAlign: 'left'
    },
    colors:[ 'var(--primary-green)'], 
  };

  const series = [{
    name: "STOCK ABC",
    data: seriesData.monthDataSeries1.prices
  }];

  return (
    <div id="chart" className={styles.totalSalary}>
      <Text children="Total Salary" theme={TextTheme.DARK_GRAY} />
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};
