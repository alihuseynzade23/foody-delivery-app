import styles from './DiscoverRestaurant.module.scss';
import pizza from '../../../../shared/assets/pizza-seafood.svg';
import burger from '../../../../shared/assets/burger.svg';
import {
  ButtonSize,
  ButtonTheme,
  Button,
  Text,
  TextSize,
  TextTheme,
  TextWeight,
} from '@org/foody-shared-components';
export const DiscoverRestaurant = () => {
  return (
    <div className={styles.discoverRestaurants}>
      <div className={styles.discoveryContent}>
        <img src={pizza} alt={'Pizza'} />
        <div>
          <Text theme={TextTheme.WHITE} weight={TextWeight.MEDIUM} size={TextSize.XL}>
            Discover Restaurants Near From you
          </Text>

          <Button theme={ButtonTheme.BG_ORANGE} className={styles.exploreBtn} size={ButtonSize.S}>
            Explore now
          </Button>
        </div>
        <img src={burger} alt={'Burger'} />
      </div>
    </div>
  );
};
