import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import styles from './HomePage.module.scss';
import introBurger from '../../../shared/assets/burger.svg';
import animatedBurger from '../../../shared/assets/burger-simple.svg';
import animatedPizza from '../../../shared/assets/pizza-seafood.svg';
import animatedFries from '../../../shared/assets/fries.svg';
import discountBoucher from '../../../shared/assets/discount-boucher.svg';
import tomatoSoup from '../../../shared/assets/tomato-soup.svg';
import deliveryServices from '../../../shared/assets/home-delivery.svg';
import promoKfc from '../../../shared/assets/twisterMenu-bg-red.svg';
import promoPizza from '../../../shared/assets/pizza-bg-red.svg';
import promoFries from '../../../shared/assets/fries-bg-red.svg';
import doubleCheese from '../../../shared/assets/burger-simple.svg';
import pizzamarqarita from '../../../shared/assets/pizza-margarita.svg';
import twisterkfc from '../../../shared/assets/twister-kfc-menu.svg';
import {
  Button,
  ButtonSize,
  ButtonTheme,
  Text,
  TextSize,
  TextTheme,
  TextWeight,
} from '@org/foody-shared-components';
import { IntroAnimated } from '../../../../../foody-client/src/shared/ui/IntroAnimated/ui/IntroAnimated';
import { FeatureCard } from '../../../../../foody-client/src/shared/ui/FeatureCard/ui/FeatureCard';
import { FoodPromo } from '../../../../../foody-client/src/shared/ui/FoodPromo/ui/FoodPromo';
import { DiscoverRestaurant } from '../../../../../foody-client/src/shared/ui/DiscoverRestaurant/ui/DiscoverRestaurant';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <Helmet>
          <title>{t`Home`}</title>
          <meta name="description" content="Home page" />
        </Helmet>
      </div>
      <div className={styles.homeContainer}>
        <section className={styles.introWrapper}>
          <div className={styles.introLeft}>
            <Text theme={TextTheme.DARK_BlACK} weight={TextWeight.EXTRABOLD} size={TextSize.XXL}>
              Our Food site makes it easy to find local food
            </Text>
            <div>
              <Text theme={TextTheme.CLEAR} weight={TextWeight.NORMAL} size={TextSize.L} className={styles.introDescription}>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups.
              </Text>
            </div>
            <div className={styles.introBtn}>
              <Button theme={ButtonTheme.BG_RED} className={styles.register} size={ButtonSize.M}>
                {t`Register`}
              </Button>
              <Button theme={ButtonTheme.CLEAR} className={styles.orderNow} size={ButtonSize.M}>
                {t`Order Now`}
              </Button>
            </div>
          </div>
          <div className={styles.introRight}>
            <div className={styles.introImage}></div>
            <img src={introBurger} alt="Burger" />
          </div>
          <IntroAnimated
            imageSrc={animatedPizza}
            altText="Pizza marqarita"
            text="Pizza Hut Yummy ..."
            className={styles.introTopRight}
          />
          <IntroAnimated
            imageSrc={animatedFries}
            altText="Delicious Pasta"
            text="French Fries Yummy ..."
            className={styles.introBottomRight}
          />
          <IntroAnimated
            imageSrc={animatedBurger}
            altText="Tasty Burger"
            text="Cheesburger Yummy ..."
            className={styles.introCenter}
          />
        </section>

        <section className={styles.featuresWrapper}>
          <Text theme={TextTheme.DARK_BlACK} weight={TextWeight.EXTRABOLD} size={TextSize.XL}>
            Features
          </Text>
          <Text theme={TextTheme.CLEAR} weight={TextWeight.NORMAL} size={TextSize.L}>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
            industries for previewing layouts and visual mockups.
          </Text>

          <div className={styles.featuresCards}>
            <FeatureCard
              imgSrc={discountBoucher}
              imgAlt="Discount Boucher"
              title="Discount Boucher"
              description="Lorem ipsum is placeholder commonly used in the graphic"
            />
            <FeatureCard
              imgSrc={tomatoSoup}
              imgAlt="Tomato Soup"
              title="Tomato Soup"
              description="Lorem ipsum is placeholder commonly used in the graphic"
            />
            <FeatureCard
              imgSrc={deliveryServices}
              imgAlt="Delivery Services"
              title="Delivery Services"
              description="Lorem ipsum is placeholder commonly used in the graphic"
            />
          </div>
        </section>

        <section className={styles.foodPromo}>
          <FoodPromo
            imgSrc={promoKfc}
            imgAlt="Promo Kfc"
            title="Menu That Always Make You Fall In Love"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <FoodPromo
            imgSrc={promoPizza}
            imgAlt="Promo Pizza"
            order={'imageFirst'}
            title="Yummy Always Papa John’s Pizza Agree?"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <FoodPromo
            imgSrc={promoFries}
            imgAlt="Promo Fries"
            title="Do You Like French Fries?"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
        </section>

        <section className={styles.popularFoods}>
        <Text theme={TextTheme.DARK_BlACK} weight={TextWeight.EXTRABOLD} size={TextSize.XL}>
            Our Popular Update New Foods
          </Text>

            <Text theme={TextTheme.CLEAR} weight={TextWeight.NORMAL} size={TextSize.L}>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
            industries for previewing layouts and visual mockups.
          </Text>

          <div className={styles.popularFoodsCard}>
            <FeatureCard
              imgSrc={doubleCheese}
              imgAlt="Double Cheese"
              title="Double Cheese"
              description="Lorem ipsum is placeholder commonly used in the graphic"
            />
            <FeatureCard
              imgSrc={pizzamarqarita}
              imgAlt="Pizza Marqarita"
              title="Marqarita"
              description="Lorem ipsum is placeholder commonly used in the graphic"
            />
            <FeatureCard
              imgSrc={twisterkfc}
              imgAlt="Twister menu kfc"
              title="Twister Menu"
              description="Lorem ipsum is placeholder commonly used in the graphic"
            />
          </div>
        </section>
        <DiscoverRestaurant />
      </div>
    </>
  );
};
