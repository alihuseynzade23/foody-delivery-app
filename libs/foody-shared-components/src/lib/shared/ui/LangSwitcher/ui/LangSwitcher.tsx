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
  theme: LangSwitcherTheme;
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
      className={classNames(styles.LangSwitcherContainer,{}, [className])}
      {...otherProps}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
    >
      <img
        onClick={toggleDropdown}
        src={i18n.language === 'en-GB' ? enIcon : azIcon}
        alt="lang"
        height={41}
        width={41}
        className={classNames(styles.LangSwitcher, {}, [className])}
      />
      {isOpen && (
        <ul className={classNames(styles.Dropdown, mods)}>
          <li onClick={() => changeLanguage('en-GB')} className={styles.DropdownItem}>
            <img src={enIcon} alt="English" />
          </li>
          {theme === LangSwitcherTheme.BLACK && <Line />}
          <li onClick={() => changeLanguage('az')} className={styles.DropdownItem}>
            <img src={azIcon} alt="Azerbaijani" />
          </li>
        </ul>
      )}
    </div>
  );
});
