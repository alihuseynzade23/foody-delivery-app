import styles from './Footer.module.scss';
import {
  Logo,
  LogoTheme,
  TextTheme,
  Text,
  TextSize,
  TextWeight,
  TextFont,
} from '@org/foody-shared-components';
import facebook from '../../../shared/assets/facebook-icon.svg';
import instagram from '../../../shared/assets/instagram-icon.svg';
import twitter from '../../../shared/assets/twitter-icon.svg';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.sectionOne}>
          <Logo theme={LogoTheme.PRIMARY} className={styles.logo} />
          <Text
            children="Lorem ipsum is placeholder text commonly used in the graphic"
            theme={TextTheme.DARK_GRAY}
          />

          <div className={styles.social}>
            <div className={styles.facebook}>
              <img src={facebook} alt="facebook icon" />
            </div>
            <div className={styles.instagram}>
              <img src={instagram} alt="instagram icon" />
            </div>
            <div className={styles.twitter}>
              <img src={twitter} alt=" twitter icon" />
            </div>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div>
            <Text
              children="Popular"
              theme={TextTheme.WHITE}
              size={TextSize.L}
              weight={TextWeight.EXTRABOLD}
              font={TextFont.MONTSERRAT}
            />
            <Link to={'#'} className={styles.link}>
              <Text
                children="Programming"
                theme={TextTheme.DARK_GRAY}
                size={TextSize.S}
                font={TextFont.MONTSERRAT}
                className={styles.sectionTwoText}
              />
            </Link>
            <Link to={'#'} className={styles.link}>
              <Text
                children="Books for children"
                theme={TextTheme.DARK_GRAY}
                size={TextSize.S}
                className={styles.sectionTwoText}
                font={TextFont.MONTSERRAT}
              />
            </Link>
            <Link to={'#'} className={styles.link}>
              <Text
                children="Psychology"
                theme={TextTheme.DARK_GRAY}
                size={TextSize.S}
                className={styles.sectionTwoText}
                font={TextFont.MONTSERRAT}
              />
            </Link>
            <Link to={'#'} className={styles.link}>
              <Text
                children="Buisness"
                theme={TextTheme.DARK_GRAY}
                size={TextSize.S}
                className={styles.sectionTwoText}
                font={TextFont.MONTSERRAT}
              />
            </Link>
          </div>
          <div>
            <Text
              children="Cash"
              theme={TextTheme.WHITE}
              size={TextSize.L}
              weight={TextWeight.EXTRABOLD}
              font={TextFont.MONTSERRAT}
            />
            <Link to={'#'} className={styles.link}>
              <Text
                children="Delivery"
                theme={TextTheme.DARK_GRAY}
                size={TextSize.S}
                className={styles.sectionTwoText}
                font={TextFont.MONTSERRAT}
              />
            </Link>
            <Link to={'#'} className={styles.link}>
              <Text
                children="Payment"
                theme={TextTheme.DARK_GRAY}
                size={TextSize.S}
                className={styles.sectionTwoText}
                font={TextFont.MONTSERRAT}
              />
            </Link>
            <Link to={'#'} className={styles.link}>
              <Text
                children="About the store"
                theme={TextTheme.DARK_GRAY}
                size={TextSize.S}
                className={styles.sectionTwoText}
                font={TextFont.MONTSERRAT}
              />
            </Link>
          </div>
          <div>
            <Text
              children="Help"
              theme={TextTheme.WHITE}
              size={TextSize.L}
              weight={TextWeight.EXTRABOLD}
              font={TextFont.MONTSERRAT}
            />
            <Link to={'#'} className={styles.link}>
              <Text
                children="Contact"
                theme={TextTheme.DARK_GRAY}
                size={TextSize.S}
                className={styles.sectionTwoText}
                font={TextFont.MONTSERRAT}
              />
            </Link>

            <Link to={'#'} className={styles.link}>
              <Text
                children="Purchase returns"
                theme={TextTheme.DARK_GRAY}
                size={TextSize.S}
                className={styles.sectionTwoText}
                font={TextFont.MONTSERRAT}
              />
            </Link>
            <Link to={'#'} className={styles.link}>
              <Text
                children="Buyer help"
                theme={TextTheme.DARK_GRAY}
                size={TextSize.S}
                className={styles.sectionTwoText}
                font={TextFont.MONTSERRAT}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.policyText}>
        <Text
          children={`All rights reserved © 2020-${new Date().getFullYear()} Foody TERMS OF USE | Privacy Policyc`}
          theme={TextTheme.DARK_GRAY}
          size={TextSize.S}
        />
      </div>
    </div>
  );
};
