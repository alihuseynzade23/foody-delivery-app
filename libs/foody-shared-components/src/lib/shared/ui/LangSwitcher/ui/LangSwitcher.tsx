import { classNames } from '../../../lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';

import styles from './LangSwitcher.module.scss';

import azIcon from '../../../../shared/assets/az.svg';
import enIcon from '../../../../shared/assets/en.svg';

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'az' : 'en');
  };

  return (
    <>
      <img
        onClick={toggle}
        src={i18n.language === 'en' ? enIcon : azIcon}
        alt="lang"
        height={41}
        width={41}
        className={classNames(styles.LangSwitcher, {}, [className])}
      />
    </>
  );
});
