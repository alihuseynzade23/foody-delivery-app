import { classNames, Mods } from '../../../lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';

import styles from './LangSwitcher.module.scss';

import azIcon from '../../../../shared/assets/az.svg';
import enIcon from '../../../../shared/assets/en.svg';
import { Line } from '../../Line/ui/Line';

export enum LangSwitcherTheme {
  CLEAR = 'clear',
  BLACK = 'black',
}

export interface LangSwitcherProps {
  className?: string;
  theme?: LangSwitcherTheme;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { theme = LangSwitcherTheme.CLEAR, className, ...otherProps } = props;

  const mods: Mods = {
    [styles[theme]]: true,
  };

  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div
      className={classNames(styles.LangSwitcherContainer, mods, [className])}
      {...otherProps}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
    >
      <img
        onClick={toggleDropdown}
        src={i18n.language === 'en' ? enIcon : azIcon}
        alt="lang"
        className={classNames(styles.LangSwitcher, {}, [className])}
      />
      {isOpen && (
        <div  className={classNames(styles.Dropdown, mods)}>
          <div
            onClick={() => changeLanguage('en')}
            className={styles.DropdownItem}
          >
            <img src={enIcon} alt="English" />
          </div>
          <Line />
          <div
            onClick={() => changeLanguage('az')}
            className={styles.DropdownItem}
          >
            <img src={azIcon} alt="Azerbaijani" />
          </div>
       
        </div>
      )}
    </div>
  );
});
