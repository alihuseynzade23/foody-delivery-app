import styles from './IntroAnimated.module.scss';
import { Text, TextFont, TextSize, TextTheme, TextWeight } from '@org/foody-shared-components';

interface IntroAnimatedProps {
  imageSrc: string;
  altText: string;
  text: string;
  textTheme?: TextTheme;
  textWeight?: TextWeight;
  textSize?: TextSize;
  className?: string;
}

export const IntroAnimated: React.FC<IntroAnimatedProps> = ({
  imageSrc,
  altText,
  text,
  className = '',
}) => {
  return (
    <div className={`${styles.introAnimatedContainer} ${className}`}>
      <img src={imageSrc} alt={altText} />
      <Text
        theme={TextTheme.GRAY}
        weight={TextWeight.M}
        size={TextSize.S}
        font={TextFont.MUKTA}
      >
        {text}
      </Text>
    </div>
  );
};
