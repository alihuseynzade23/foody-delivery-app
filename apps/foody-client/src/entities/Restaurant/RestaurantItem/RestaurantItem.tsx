import { FC } from 'react';
import styles from './RestaurantItem.module.scss';
import { Text, TextSize, TextTheme, TextWeight } from '@org/foody-shared-components';
import { useNavigate } from 'react-router-dom';

type Props = {
  data: any;
};

export const RestaurantItem: FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${data._id}`);
  };

  return (
    <div onClick={handleClick} role='button' className={styles.container}>
      <img height={161} width={174} src={data.image} alt={data.name} />
      <Text theme={TextTheme.STRONG_GRAY} weight={TextWeight.BOLD} size={TextSize.L}>
        {data.name}
      </Text>
      <Text theme={TextTheme.PRIMARY_GRAY}>{data.cuisine}</Text>
      <div className={styles.wrapper}>
        <Text theme={TextTheme.STRONG_GRAY} weight={TextWeight.BOLD}>
          ${data.price} delivery
        </Text>
        <Text className={styles.deliveryTime} theme={TextTheme.WHITE}>
          {data.deliveryTime} min
        </Text>
      </div>
    </div>
  );
};
