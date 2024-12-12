import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';
import styles from './OrdersChart.module.scss';
import { Text, TextTheme } from '@org/foody-shared-components';


interface LegendFormatterOptions {
  seriesIndex: number;
}

interface TooltipFormatterOptions {
  seriesIndex: number;
}

export const OrdersChart = () => {
  const series = [20, 60, 20, 43, 76];
  const restaurantNames = ['KFC', 'KLM', 'American Express', 'McDonalds', 'Burger King'].slice(
    0,
    series.length,
  );

  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: true,
      position: 'bottom',
      labels: {
        colors: 'var(--secondary-dark-gray)',
      },
      markers: {
        offsetX: -10,
      },
      itemMargin: {
        horizontal: 10,
      },
      formatter: (value: string, opts: LegendFormatterOptions) => {
        return restaurantNames[opts.seriesIndex];
      },
    },
    tooltip: {
      y: {
        formatter: (value: number, { seriesIndex }: TooltipFormatterOptions) => {
          return `${restaurantNames[seriesIndex]}: ${value}`;
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            markers: {
              offsetX: -10,
            },
            itemMargin: {
              horizontal: 10,
            },
            formatter: (value: string, opts: LegendFormatterOptions) => {
              return restaurantNames[opts.seriesIndex];
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            markers: {
              offsetX: -10,
            },
            itemMargin: {
              horizontal: 10,
            },
            formatter: (value: string, opts: LegendFormatterOptions) => {
              return restaurantNames[opts.seriesIndex];
            },
          },
        },
      },
    ],
  };

  return (
    <div id="chart" className={styles.simpleDonut}>
      <Text children="Orders" theme={TextTheme.DARK_GRAY} />
      <Chart options={options} series={series} type="donut" />
      <div className={styles.centerText}>Project by account</div>
    </div>
  );
};
