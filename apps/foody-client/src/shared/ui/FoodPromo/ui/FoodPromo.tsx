import { TextSize, TextTheme, TextWeight, Text } from '@org/foody-shared-components';
import styles from './FoodPromo.module.scss';

interface FoodPromoProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    order?: 'textFirst' | 'imageFirst';
}

export const FoodPromo: React.FC<FoodPromoProps> = ({ imgSrc, imgAlt, title, description, order = 'textFirst' }) => {
    return (
        <div className={styles.foodPromoContainer}>
            <div className={`${styles.promoText} ${order === 'imageFirst' ? styles.order2 : styles.order1}`}>
                <Text theme={TextTheme.DARK_BlACK} weight={TextWeight.EXTRABOLD} size={TextSize.XXL}>
                    {title}
                </Text>
                <Text theme={TextTheme.CLEAR} weight={TextWeight.NORMAL} size={TextSize.M}>
                    {description}
                </Text>
            </div>
            <div className={`${styles.promoImage} ${order === 'imageFirst' ? styles.order1 : styles.order2}`}>
                <img src={imgSrc} alt={imgAlt} />
            </div>
        </div>
    );
};
